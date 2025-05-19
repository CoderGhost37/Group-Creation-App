'use server'

import { db } from '@/lib/prisma'
import { unstable_cache } from 'next/cache'

export const getAllCohorts = unstable_cache(
  async () => {
    try {
      const cohorts = await db.cohort.findMany({
        select: {
          id: true,
          name: true,
          description: true,
          startDate: true,
        },
      })
      return cohorts
    } catch (error) {
      console.error('Error fetching cohorts:', error)
      throw new Error('Failed to fetch cohorts')
    }
  },
  ['cohorts'],
  {
    tags: ['cohorts'],
    revalidate: 84600, // 24 hours
  }
)
