'use server'

import { db } from '@/lib/prisma'
import { revalidateTag } from 'next/cache'
import { getUser } from '../auth/getUser'

export async function banUser(userId: string, reason: string) {
  const user = await getUser()
  if (!user) {
    throw new Error('User not authenticated')
  }
  if (user.role !== 'ADMIN') {
    throw new Error('Unauthorized')
  }
  try {
    const user = await db.user.update({
      where: {
        id: userId,
      },
      data: {
        status: 'BANNED',
        bannedAt: new Date(),
        deletedAt: null,
      },
      select: {
        student: {
          select: {
            id: true,
          },
        },
      },
    })

    if (!user || !user.student) {
      throw new Error('User not found.')
    }

    await db.studentLog.create({
      data: {
        action: 'Account Banned by Admin',
        details: reason,
        type: 'ACCOUNT_BANNED',
        student: {
          connect: {
            id: user.student.id,
          },
        },
      },
    })
    revalidateTag('users')

    return {
      success: true,
      message: 'User banned successfully',
    }
  } catch (error) {
    console.error('Error banning user:', error)
    return {
      success: false,
      message: 'Failed to ban user',
    }
  }
}
