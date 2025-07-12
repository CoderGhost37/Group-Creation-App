'use server'

import { db } from '@/lib/prisma'

export const getGroupJoinRequests = async (groupId: string) => {
  try {
    const pendingRequests = await db.groupJoinRequest.findMany({
      where: {
        groupId,
        status: 'PENDING',
      },
      select: {
        id: true,
        reason: true,
        createdAt: true,
        user: {
          select: {
            id: true,
            user: {
              select: {
                id: true,
                name: true,
                email: true,
              },
            },
          },
        },
      },
    })

    return pendingRequests.map((request) => ({
      id: request.id,
      reason: request.reason,
      createdAt: request.createdAt,
      studentId: request.user?.id,
      user: {
        id: request.user?.user?.id,
        name: request.user?.user?.name,
        email: request.user?.user?.email,
      },
    }))
  } catch (error) {
    console.error('Error fetching user group pending requests:', error)
    return []
  }
}
