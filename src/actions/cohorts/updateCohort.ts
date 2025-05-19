'use server'

import { db } from '@/lib/prisma'
import { CohortSchema } from '@/schemas/cohort'
import { revalidateTag } from 'next/cache'
import type { z } from 'zod'
import { getUser } from '../auth/getUser'

export async function updateCohort(cohortId: string, values: z.infer<typeof CohortSchema>) {
  const user = await getUser()
  if (!user) {
    throw new Error('User not authenticated')
  }
  if (user.role !== 'ADMIN') {
    throw new Error('Unauthorized')
  }
  try {
    const validatedFields = CohortSchema.safeParse(values)
    if (!validatedFields.success) {
      return {
        success: false,
        message: 'Invalid values',
      }
    }

    const { name, description, startDate } = validatedFields.data

    await db.cohort.update({
      where: {
        id: cohortId,
      },
      data: {
        name,
        description,
        startDate: new Date(startDate),
      },
    })
    revalidateTag('cohorts')

    return {
      success: true,
      message: 'Cohort updated successfully',
    }
  } catch (error) {
    console.error('Error updating cohorts:', error)
    return {
      success: false,
      message: 'Failed to update cohort',
    }
  }
}
