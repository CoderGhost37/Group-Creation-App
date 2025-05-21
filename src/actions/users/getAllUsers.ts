'use server'

import { UserRole } from '@/generated/prisma'
import { db } from '@/lib/prisma'
import { unstable_cache } from 'next/cache'

export const getAllUsers = unstable_cache(
  async () => {
    try {
      const users = await db.user.findMany({
        where: {
          role: UserRole.USER,
          status: 'ACTIVE',
        },
        select: {
          id: true,
          name: true,
          email: true,
          status: true,
          student: {
            select: {
              cohorts: {
                include: {
                  cohort: {
                    select: {
                      id: true,
                      name: true,
                    },
                  },
                },
              },
            },
          },
        },
      })
      return users.map((user) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        status: user.status,
        cohorts:
          user.student?.cohorts.map((student) => ({
            id: student.cohort.id,
            name: student.cohort.name,
          })) || [],
      }))
    } catch (error) {
      console.error('Error fetching users:', error)
      throw new Error('Failed to fetch users')
    }
  },
  ['users'],
  {
    tags: ['users'],
    revalidate: 84600, // 24 hours
  }
)
