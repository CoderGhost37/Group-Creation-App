'use server'

import { db } from '@/lib/prisma'
import { UploadStudentsSchema } from '@/schemas/students'
import { revalidateTag } from 'next/cache'
import { parse } from 'papaparse'
import type { z } from 'zod'
import { createUser } from '../auth/createUser'
import { getUser } from '../auth/getUser'

const fileToString = async (file: File): Promise<string> => {
  const arrayBuffer = await file.arrayBuffer()
  return Buffer.from(arrayBuffer).toString('utf-8')
}

export async function createUsersFromCSV(values: z.infer<typeof UploadStudentsSchema>) {
  const user = await getUser()
  if (!user) {
    throw new Error('User not authenticated')
  }
  if (user.role !== 'ADMIN') {
    throw new Error('Unauthorized')
  }

  const validateFields = UploadStudentsSchema.safeParse(values)
  if (!validateFields.success) {
    return {
      success: false,
      message: 'Invalid form data',
      errors: validateFields.error.format(),
    }
  }

  const { cohortId, file } = validateFields.data
  try {
    const csvText = await fileToString(file as File)

    const { data, errors } = parse(csvText, {
      header: true,
      skipEmptyLines: true,
    })

    if (errors.length > 0) {
      console.error(errors)
      throw new Error('CSV parse error')
    }

    for (const row of data as { name: string; email: string }[]) {
      const { name, email } = row

      if (!email || !name) continue

      const existingUser = await db.user.findUnique({
        where: { email },
        include: { student: true },
      })

      let studentId: string

      if (existingUser && existingUser.student) {
        studentId = existingUser.student.id
      } else {
        const { user: newUser } = await createUser(name, email)
        if (!newUser) {
          throw new Error('Failed to create user')
        }
        studentId = newUser.student!.id
      }

      await db.studentCohort.upsert({
        where: {
          studentId_cohortId: {
            studentId,
            cohortId,
          },
        },
        update: {},
        create: {
          studentId,
          cohortId,
        },
      })
    }

    revalidateTag('users')

    return {
      success: true,
      message: 'Users created successfully',
    }
  } catch (error: any) {
    console.error('Error creating users:', error)
    return {
      success: false,
      message: error.message || 'Failed to create users',
    }
  }
}
