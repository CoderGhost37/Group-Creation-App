'use server'

import { db } from '@/lib/prisma'
import { GroupSchema } from '@/schemas/group'
import { revalidateTag } from 'next/cache'
import type { z } from 'zod'
import { getUser } from '../auth/getUser'

export async function createGroup(values: z.infer<typeof GroupSchema>) {
  const user = await getUser()
  if (!user) {
    throw new Error('User not authenticated')
  }
  try {
    const validatedFields = GroupSchema.safeParse(values)
    if (!validatedFields.success) {
      return {
        success: false,
        message: 'Invalid values',
      }
    }

    const { name, description, cohortId } = validatedFields.data

    const student = await db.student.findUnique({
      where: {
        userId: user.id,
      },
      select: {
        id: true,
        adminOfGroups: {
          select: {
            id: true,
          },
        },
        groups: {
          select: {
            group: {
              select: {
                id: true,
                cohortId: true,
              },
            },
          },
        },
      },
    })

    if (!student) {
      return {
        success: false,
        message: 'Student profile not found',
      }
    }

    const memberOfGroupWithCohortId = student.groups.some((g) => g.group.cohortId === cohortId)

    if (memberOfGroupWithCohortId) {
      return {
        success: false,
        message: 'You are already a member of a group in this cohort',
      }
    }

    await db.group.create({
      data: {
        name,
        description,
        cohortId,
        adminId: student.id,
        status: 'OPEN',
        members: {
          create: {
            studentId: student.id,
          },
        },
        groupLogs: {
          create: {
            type: 'AUDIT',
            content: `Group created by ${user.name}`,
          },
        },
      },
    })

    revalidateTag('groups')

    return {
      success: true,
      message: 'Group created successfully',
    }
  } catch (error) {
    console.error('Error creating groups:', error)
    return {
      success: false,
      message: 'Failed to create group',
    }
  }
}
