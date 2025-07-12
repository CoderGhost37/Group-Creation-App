'use server'

import { db } from '@/lib/prisma'

export const getGroupMemberDetails = async (groupId: string) => {
  try {
    const members = await db.groupMember.findMany({
      where: {
        groupId,
      },
      select: {
        student: {
          select: {
            user: {
              select: {
                id: true,
                name: true,
                email: true,
              },
            },
          },
        },
      },
    })

    return members.map((member) => ({
      id: member.student.user?.id ?? '',
      name: member.student.user?.name ?? '',
      email: member.student.user?.email ?? '',
    }))
  } catch (error) {
    console.error('Error fetching group member details:', error)
    return []
  }
}
