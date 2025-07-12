'use server'

import { db } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { getUser } from '../auth/getUser'

export const withdrawJoinGroupRequest = async (requestId: string) => {
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
        status: 'WITHDRAWN',
      },
      select: {
        groupId: true,
      },
    })

    revalidatePath(`/dashboard/groups/${request.groupId}`)
    revalidatePath('/dashboard/groups')

    return {
      success: true,
      message: 'Join request withdrawn successfully',
      error: null,
    }
  } catch (error) {
    console.error('Error withdrawing user group join request:', error)
    return {
      success: false,
      message: null,
      error: 'Failed to withdraw join request',
    }
  }
}
