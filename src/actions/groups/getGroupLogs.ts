'use server'

import { db } from '@/lib/prisma'

export async function getGroupLogs(groupId: string) {
  try {
    const logs = await db.groupLog.findMany({
      where: {
        groupId,
      },
      orderBy: {
        createdAt: 'desc',
      },
    })
    return logs
  } catch (error) {
    console.error('Error fetching group logs:', error)
    return []
  }
}
