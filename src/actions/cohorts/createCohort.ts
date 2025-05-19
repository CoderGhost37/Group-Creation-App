'use server'

import { db } from '@/lib/prisma'
import { CohortSchema } from '@/schemas/cohort'
import { revalidateTag } from 'next/cache'
import type { z } from 'zod'
import { getUser } from '../auth/getUser'

export async function createCohort(values: z.infer<typeof CohortSchema>) {
  const user = await getUser()
  if (!user) {
    throw new Error('User not authenticated')
  }
  if (user.role !== 'ADMIN') {
    throw new Error('Unauthorized')
  }
  try {
    const validatedFields = CohortSchema.safeParse(values)
    if (!validatedFields.success) {
      return {
        success: false,
        message: 'Invalid values',
      }
    }

    const { name, description, startDate } = validatedFields.data

    await db.cohort.create({
      data: {
        name,
        description,
        startDate: new Date(startDate),
      },
    })
    revalidateTag('cohorts')

    return {
      success: true,
      message: 'Cohort created successfully',
    }
  } catch (error) {
    console.error('Error creating cohorts:', error)
    return {
      success: false,
      message: 'Failed to create cohort',
    }
  }
}
