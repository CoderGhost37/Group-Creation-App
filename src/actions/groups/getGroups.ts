'use server'

import { db } from '@/lib/prisma'
import { unstable_cache } from 'next/cache'

export const getAllGroups = unstable_cache(
  async (userId: string, query?: string, cohortId?: string) => {
    try {
      const student = await db.student.findUnique({
        where: { userId },
        select: {
          id: true,
          groups: {
            select: {
              groupId: true,
            },
          },
          cohorts: {
            select: {
              cohortId: true,
            },
          },
        },
      })

      if (!student) {
        throw new Error('Student profile not found')
      }

      const groups = await db.group.findMany({
        where: {
          status: 'OPEN',
          ...(query ? { name: { contains: query, mode: 'insensitive' } } : {}),
          ...(cohortId
            ? { cohortId }
            : { cohortId: { in: student.cohorts.map((c) => c.cohortId) } }),
        },
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
      })
      return groups.map((group) => ({
        id: group.id,
        name: group.name,
        description: group.description,
        isUserAdmin: group.adminId === student.id,
        isUserMember: student.groups.some((g) => g.groupId === group.id),
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
    revalidate: 84600, // 24 hours
  }
)
