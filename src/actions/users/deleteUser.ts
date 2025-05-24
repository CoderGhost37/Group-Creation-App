'use server'

import { db } from '@/lib/prisma'
import { revalidateTag } from 'next/cache'
import { getUser } from '../auth/getUser'

export async function deleteUser(userId: string) {
  const user = await getUser()
  if (!user) {
    throw new Error('User not authenticated')
  }
  if (user.role !== 'ADMIN') {
    throw new Error('Unauthorized')
  }
  try {
    await db.user.update({
      where: {
        id: userId,
      },
      data: {
        status: 'DELETED',
        bannedAt: null,
        deletedAt: new Date(),
      },
    })
    revalidateTag('users')

    return {
      success: true,
      message: 'User deleted successfully',
    }
  } catch (error) {
    console.error('Error deleting user:', error)
    return {
      success: false,
      message: 'Failed to delete user',
    }
  }
}
