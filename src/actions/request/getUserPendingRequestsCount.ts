'use server'

import { db } from '@/lib/prisma'
import { getUser } from '../auth/getUser'

export const getUserPendingRequestsCount = async () => {
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

    const pendingRequestsCount = await db.groupJoinRequest.count({
      where: {
        userId: student.id,
        status: 'PENDING',
      },
    })

    return {
      success: true,
      data: pendingRequestsCount,
    }
  } catch (error) {
    console.error('Error fetching user group pending requests:', error)
    return {
      success: false,
      data: null,
    }
  }
}
