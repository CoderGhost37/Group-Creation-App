'use server'

import { db } from '@/lib/prisma'
import { revalidateTag } from 'next/cache'
import { getUser } from '../auth/getUser'

export async function deleteCohort(cohortId: string) {
  const user = await getUser()
  if (!user) {
    throw new Error('User not authenticated')
  }
  if (user.role !== 'ADMIN') {
    throw new Error('Unauthorized')
  }
  try {
    await db.cohort.delete({
      where: {
        id: cohortId,
      },
    })
    revalidateTag('cohorts')

    return {
      success: true,
      message: 'Cohort deleted successfully',
    }
  } catch (error) {
    console.error('Error deleting cohorts:', error)
    return {
      success: false,
      message: 'Failed to delete cohort',
    }
  }
}
