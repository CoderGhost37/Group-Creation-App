'use server'

import { db } from '@/lib/prisma'
import { unstable_cache } from 'next/cache'

export const getGroupDetails = unstable_cache(
  async (groupId: string) => {
    try {
      const group = await db.group.findUnique({
        where: {
          id: groupId,
        },
        select: {
          id: true,
          name: true,
          description: true,
          status: true,
          createdAt: true,
          cohort: {
            select: {
              id: true,
              name: true,
            },
          },
          admin: {
            select: {
              user: {
                select: {
                  id: true,
                },
              },
            },
          },
          members: {
            select: {
              studentId: true,
            },
          },
        },
      })

      if (!group) {
        return null
      }

      return {
        id: group.id,
        name: group.name,
        description: group.description,
        status: group.status,
        createdAt: group.createdAt,
        cohort: group.cohort,
        adminUserId: group.admin?.user?.id,
        membersCount: group.members.length,
        maxMembers: 5,
      }
    } catch (error) {
      console.error('Error fetching group:', error)
      return null
    }
  },
  ['groups'],
  {
    tags: ['groups'],
    revalidate: 84600, // 24 hours
  }
)
