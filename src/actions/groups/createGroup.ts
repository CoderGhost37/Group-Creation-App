'use server'

import { db } from '@/lib/prisma'
import { GroupSchema } from '@/schemas/group'
import { revalidateTag } from 'next/cache'
import type { z } from 'zod'
import { getUser } from '../auth/getUser'

export async function createGroup(values: z.infer<typeof GroupSchema>) {
  const user = await getUser()
  if (!user) {
    throw new Error('User not authenticated')
  }
  try {
    const validatedFields = GroupSchema.safeParse(values)
    if (!validatedFields.success) {
      return {
        success: false,
        message: 'Invalid values',
      }
    }

    const { name, description, cohortId, adminId } = validatedFields.data

    await db.group.create({
      data: {
        name,
        description,
        cohortId,
        adminId,
        status: 'OPEN',
      },
    })
    revalidateTag('groups')

    return {
      success: true,
      message: 'Group created successfully',
    }
  } catch (error) {
    console.error('Error creating groups:', error)
    return {
      success: false,
      message: 'Failed to create group',
    }
  }
}
