'use server'

import { db } from '@/lib/prisma'

export const getUserActivityLogsInfo = async (userId: string) => {
  try {
    const user = await db.user.findUnique({
      where: { id: userId },
      select: {
        student: {
          select: {
            studentLogs: {
              select: {
                id: true,
                action: true,
                details: true,
                type: true,
                createdAt: true,
              },
              orderBy: {
                createdAt: 'desc',
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
      data: user.student.studentLogs.map((log) => ({
        id: log.id,
        action: log.action,
        details: log.details,
        type: log.type,
        createdAt: log.createdAt,
      })),
    }
  } catch (error) {
    console.error('Error fetching user activity logs:', error)
    return {
      success: false,
      data: null,
    }
  }
}
