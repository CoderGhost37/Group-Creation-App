'use server'

import { db } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { getUser } from '../auth/getUser'

export async function postAnnouncement(groupId: string, announcement: string) {
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
      select: { id: true, adminId: true },
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

    await db.groupLog.create({
      data: {
        groupId,
        type: 'ANNOUNCEMENT',
        content: announcement,
      },
    })

    revalidatePath(`/dashboard/groups/${groupId}`)

    return { success: true, message: 'Announcement posted successfully', error: null }
  } catch (error) {
    console.error('Error posting announcement:', error)
    return { success: false, message: null, error: 'Failed to post announcement' }
  }
}
