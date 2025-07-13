'use server'

import { db } from '@/lib/prisma'
import { revalidatePath, revalidateTag } from 'next/cache'
import { getUser } from '../auth/getUser'

export async function leaveGroup(groupId: string) {
  const user = await getUser()
  if (!user) {
    throw new Error('User not authenticated')
  }

  try {
    const student = await db.student.findUnique({
      where: {
        userId: user.id,
      },
      select: {
        id: true,
      },
    })

    if (!student) {
      throw new Error('Student not found')
    }

    await db.groupMember.delete({
      where: {
        studentId_groupId: {
          studentId: student?.id,
          groupId: groupId,
        },
      },
    })

    await db.groupLog.create({
      data: {
        groupId: groupId,
        type: 'AUDIT',
        content: `${user.name} has left the group.`,
      },
    })

    await db.studentLog.create({
      data: {
        type: 'LEAVE_GROUP',
        action: 'Left Group',
        details: `Left group ${groupId}`,
        student: {
          connect: {
            id: student.id,
          },
        },
      },
    })

    revalidatePath(`/dashboard/groups/${groupId}`)
    revalidatePath('/dashboard/groups')
    revalidateTag('groups')

    return {
      success: true,
      message: 'You have successfully left the group.',
      error: null,
    }
  } catch (error) {
    console.error('Error leaving group:', error)
    return {
      success: false,
      message: null,
      error: 'Failed to leave group. Please try again later.',
    }
  }
}
