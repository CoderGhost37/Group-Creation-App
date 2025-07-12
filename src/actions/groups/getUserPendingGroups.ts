'use server'

import { db } from '@/lib/prisma'
import { getUser } from '../auth/getUser'

export const getUserPendingGroups = async () => {
  const user = await getUser()
  if (!user) {
    throw new Error('User not authenticated')
  }

  try {
    const student = await db.student.findUnique({
      where: { userId: user.id },
      select: { id: true },
    })

    if (!student) {
      return {
        success: false,
        data: null,
      }
    }

    const groups = await db.groupJoinRequest.findMany({
      where: {
        userId: student.id,
        status: 'PENDING',
      },
      select: {
        id: true,
        group: {
          select: {
            id: true,
            name: true,
            description: true,
            adminId: true,
            members: {
              select: {
                id: true,
              },
            },
            cohort: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
        status: true,
        createdAt: true,
      },
    })

    return {
      success: true,
      data: groups.map((group) => ({
        id: group.group?.id,
        name: group.group?.name,
        description: group.group?.description,
        members: group.group?.members.length,
        maxMembers: 5,
        cohort: {
          id: group.group?.cohort?.id,
          name: group.group?.cohort?.name,
        },
        status: group.status,
        requestedAt: group.createdAt,
      })),
    }
  } catch (error) {
    console.error('Error fetching user groups info:', error)
    return {
      success: false,
      data: null,
    }
  }
}
