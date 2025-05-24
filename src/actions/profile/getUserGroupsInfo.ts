'use server'

import { db } from '@/lib/prisma'

export const getUserGroupsInfo = async (userId: string) => {
  try {
    const user = await db.user.findUnique({
      where: { id: userId },
      select: {
        student: {
          select: {
            adminOfGroups: {
              select: {
                id: true,
              },
            },
            groups: {
              select: {
                createdAt: true,
                group: {
                  select: {
                    id: true,
                    name: true,
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
        },
      },
    })

    if (!user || !user.student) {
      throw new Error('User not found or student profile is incomplete')
    }

    return {
      success: true,
      data: user.student.groups.map((g) => ({
        id: g.group.id,
        name: g.group.name,
        cohort: {
          id: g.group.cohort?.id,
          name: g.group.cohort?.name,
        },
        role: 'Admin',
        // role: user.student?.adminOfGroups.some(ag => ag.id === g.group.id) ? 'Admin' : 'Member',
        joinedAt: g.createdAt,
      })),
    }
  } catch (error) {
    console.error('Error fetching user groups info:', error)
    return {
      success: false,
      data: null,
    }
  }
}
