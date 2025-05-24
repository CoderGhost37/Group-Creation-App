'use server'

import { db } from '@/lib/prisma'

export const getBasicUserInfo = async (userId: string) => {
  try {
    const user = await db.user.findUnique({
      where: { id: userId },
      select: {
        name: true,
        role: true,
        status: true,
        createdAt: true,
        bannedAt: true,
        deletedAt: true,
      },
    })
    return {
      success: true,
      data: user,
    }
  } catch (error) {
    console.error('Error fetching basic user info:', error)
    return {
      success: false,
      data: null,
    }
  }
}
