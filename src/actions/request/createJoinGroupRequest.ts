'use server'

import { db } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
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

    await db.studentLog.create({
      data: {
        type: 'SEND_GROUP_JOIN_REQUEST',
        action: 'Group Join Request Created',
        details: `Join request for group ${groupId} created with reason: ${reason}`,
        student: {
          connect: {
            id: student.id,
          },
        },
      },
    })

    revalidatePath(`/dashboard/groups/${groupId}`)
    revalidatePath('/dashboard/groups')

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
