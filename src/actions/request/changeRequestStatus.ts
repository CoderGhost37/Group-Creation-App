'use server'

import { db } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { getUser } from '../auth/getUser'

export const changeRequestStatus = async (requestId: string, status: 'ACCEPTED' | 'REJECTED') => {
  const loggedInUser = await getUser()

  if (!loggedInUser) {
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
        group: {
          select: {
            id: true,
            name: true,
          },
        },
        userId: true,
      },
    })

    if (!request.group) {
      return {
        success: false,
        message: null,
        error: 'Group not found',
      }
    }

    const groupId = request.group.id
    const groupName = request.group.name
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

      await db.studentLog.createMany({
        data: [
          {
            type: 'GROUP_JOIN_REQUEST_ACCEPTED',
            action: 'Group Join Request Approved',
            details: `Group join request for group ${groupName} has been approved`,
            studentId,
          },
          {
            type: 'JOIN_GROUP',
            action: 'User joined a new group',
            details: `Joined ${groupName} group`,
            studentId,
          },
          {
            type: 'ACCEPTED_GROUP_JOIN_REQUEST',
            action: 'Group Join Request Accepted',
            details: `Group join request of user ${user.user.name} has been accepted for ${groupName} group`,
            studentId: loggedInUser.id,
          },
        ],
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
          content: `Join request for ${user.user.name} was approved and the user has been added to the group.`,
        },
      })
    } else {
      await db.studentLog.createMany({
        data: [
          {
            type: 'GROUP_JOIN_REQUEST_REJECTED',
            action: 'Group Join Request Rejected',
            details: `Group join request for group ${groupName} has been rejected`,
            studentId,
          },
          {
            type: 'REJECTED_GROUP_JOIN_REQUEST',
            action: 'Group Join Request Rejected',
            details: `Group join request of user ${user.user.name} has been rejected for ${groupName} group`,
            studentId: loggedInUser.id,
          },
        ],
      })
    }

    revalidatePath(`/dashboard/groups/${groupId}`)
    revalidatePath('/dashboard/groups')

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
