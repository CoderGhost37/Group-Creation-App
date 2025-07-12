'use server'

import { db } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { getUser } from '../auth/getUser'

export async function removeGroupMember(groupId: string, memberId: string) {
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

    const studentId = student?.id

    const group = await db.group.findUnique({
      where: { id: groupId },
      select: {
        adminId: true,
        members: {
          select: {
            studentId: true,
          },
        },
      },
    })

    if (!group || group.adminId !== studentId) {
      throw new Error('You are not authorized to remove members from this group')
    }
    console.log(memberId)
    const member = await db.groupMember.delete({
      where: {
        studentId_groupId: {
          studentId: memberId,
          groupId,
        },
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

    await db.groupLog.create({
      data: {
        groupId,
        type: 'AUDIT',
        content: `Group member ${member.student.user?.name} has been removed from the group.`,
      },
    })

    if (group.members.length === 5) {
      await db.group.update({
        where: { id: groupId },
        data: { status: 'OPEN' },
      })
    }

    revalidatePath(`/dashboard/groups/${groupId}`)
    revalidatePath('/dashboard/groups')

    return { success: true, message: 'Member removed successfully', error: null }
  } catch (error) {
    console.error('Error removing group member:', error)
    return { success: false, message: null, error: 'Failed to remove member' }
  }
}
