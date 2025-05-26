'use server'

import { db } from '@/lib/prisma'

export const getUserCohortInfo = async (userId: string) => {
  try {
    const user = await db.user.findUnique({
      where: { id: userId },
      select: {
        student: {
          select: {
            cohorts: {
              include: {
                cohort: {
                  select: {
                    id: true,
                    name: true,
                    description: true,
                    startDate: true,
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
      data: user.student.cohorts.map((sc) => ({
        id: sc.cohort.id,
        name: sc.cohort.name,
        description: sc.cohort.description,
        startDate: sc.cohort.startDate,
      })),
    }
  } catch (error) {
    console.error('Error fetching user cohorts info:', error)
    return {
      success: false,
      data: null,
    }
  }
}
