'use server'

import { db } from '@/lib/prisma'
import { revalidateTag } from 'next/cache'
import { getUser } from '../auth/getUser'

export const changeRequestStatus = async (requestId: string, status: 'ACCEPTED' | 'REJECTED') => {
  const user = await getUser()

  if (!user) {
    throw new Error('User not authenticated')
  }

  try {
    const request = await db.groupJoinRequest.update({
      where: {
        id: requestId,
      },
      data: {
        status,
      },
      select: {
        groupId: true,
        userId: true,
      },
    })

    const groupId = request.groupId
    const studentId = request.userId

    const user = await db.student.findUnique({
      where: {
        id: studentId,
      },
      select: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    })

    if (!user || !user.user) {
      return {
        success: false,
        message: null,
        error: 'User not found',
      }
    }

    if (status === 'ACCEPTED') {
      await db.groupMember.create({
        data: {
          groupId,
          studentId,
        },
      })

      const groupMembersCount = await db.groupMember.count({
        where: {
          groupId,
        },
      })

      if (groupMembersCount === 5) {
        await db.group.update({
          where: {
            id: groupId,
          },
          data: {
            status: 'CLOSED',
          },
        })
      }

      await db.groupLog.create({
        data: {
          groupId,
          type: 'AUDIT',
          content: `User ${user.user.name} (${user.user.email}) has been accepted into the group.`,
        },
      })
    }

    revalidateTag('pending-requests')

    return {
      success: true,
      message: `Join request ${status.toLowerCase()} successfully`,
      error: null,
    }
  } catch (error) {
    console.error('Error changing user group join request status:', error)
    return {
      success: false,
      message: null,
      error: 'Failed to change join request status',
    }
  }
}
