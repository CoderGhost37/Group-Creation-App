'use server'

import { db } from '@/lib/prisma'
import { revalidatePath, revalidateTag } from 'next/cache'
import { getUser } from '../auth/getUser'

export async function deleteGroup(groupId: string) {
  const user = await getUser()
  if (!user) {
    throw new Error('User not found')
  }

  try {
    const student = await db.student.findUnique({
      where: { userId: user.id },
      select: { id: true },
    })

    if (!student) {
      throw new Error('Student not found')
    }

    const group = await db.group.findUnique({
      where: { id: groupId },
      select: { id: true, adminId: true, members: { select: { id: true } } },
    })

    if (!group) {
      throw new Error('Group not found')
    }

    if (group.adminId !== student.id) {
      return {
        success: false,
        message: 'You are not authorized to post announcements',
        error: null,
      }
    }

    if (group.members.length > 1) {
      return {
        success: false,
        message:
          'You cannot delete a group with members. Please remove all members before deleting.',
        error: null,
      }
    }

    await db.group.update({
      where: { id: groupId },
      data: {
        status: 'DELETED',
        deletedAt: new Date(),
        admin: {
          disconnect: true,
        },
        members: {
          delete: {
            studentId_groupId: {
              studentId: student.id,
              groupId: groupId,
            },
          },
        },
        groupLogs: {
          create: {
            type: 'AUDIT',
            content: `Group deleted by ${user.name}`,
          },
        },
      },
    })

    revalidatePath(`/dashboard/groups/${groupId}`)
    revalidatePath('/dashboard/groups')
    revalidateTag('groups')

    return { success: true, message: 'Announcement posted successfully', error: null }
  } catch (error) {
    console.error('Error posting announcement:', error)
    return { success: false, message: null, error: 'Failed to post announcement' }
  }
}
