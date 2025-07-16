'use server'

import { db } from '@/lib/prisma'
import { unstable_cache } from 'next/cache'

export const getAllGroups = unstable_cache(
  async (userId: string, query?: string, cohortId?: string, page = 1, limit = 12) => {
    try {
      const admin = await db.user.findUnique({
        where: {
          role: 'ADMIN',
          id: userId,
        },
      })

      if (!admin) throw new Error('Admin profile not found')

      const filters: any = {}
      if (query) {
        filters.name = { contains: query, mode: 'insensitive' }
      }
      if (cohortId) {
        filters.cohortId = cohortId
      }

      const groups = await db.group.findMany({
        where: filters,
        select: {
          id: true,
          name: true,
          description: true,
          status: true,
          members: { select: { id: true } },
          cohort: { select: { id: true, name: true } },
        },
        skip: (page - 1) * limit,
        take: limit,
      })

      return groups.map((group) => ({
        id: group.id,
        name: group.name,
        description: group.description,
        status: group.status,
        membersCount: group.members.length,
        maxMembers: 5,
        cohort: {
          id: group.cohort?.id,
          name: group.cohort?.name,
        },
      }))
    } catch (error) {
      console.error('Error fetching groups:', error)
      return []
    }
  },
  ['groups'],
  {
    tags: ['groups'],
    revalidate: 84600,
  }
)
