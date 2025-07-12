'use server'

import { db } from '@/lib/prisma'
import { revalidateTag } from 'next/cache'
import { getUser } from '../auth/getUser'

export const createGroupJoiningRequest = async (reason: string, groupId: string) => {
  const user = await getUser()

  if (!user) {
    throw new Error('User not authenticated')
  }

  try {
    const student = await db.student.findUnique({
      where: {
        userId: user.id,
      },
      select: {
        id: true,
      },
    })

    if (!student) {
      return {
        success: false,
        data: null,
      }
    }

    await db.groupJoinRequest.create({
      data: {
        reason,
        group: {
          connect: {
            id: groupId,
          },
        },
        user: {
          connect: {
            id: student.id,
          },
        },
        status: 'PENDING',
      },
    })

    revalidateTag('pending-requests')

    return {
      success: true,
      message: 'Join request created successfully',
      error: null,
    }
  } catch (error) {
    console.error('Error creating user group pending request:', error)
    return {
      success: false,
      message: null,
      error: 'Failed to create join request',
    }
  }
}
