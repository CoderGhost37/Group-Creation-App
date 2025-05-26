'use server'

import { db } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import * as z from 'zod'

const ProfileSchema = z.object({
  bio: z.string().optional(),
  linkedIn: z.string().optional(),
  github: z.string().optional(),
  website: z.string().optional(),
  twitter: z.string().optional(),
  peerlist: z.string().optional(),
})

export const updateUserProfile = async (userId: string, values: z.infer<typeof ProfileSchema>) => {
  const validateFields = ProfileSchema.safeParse(values)
  if (!validateFields.success) {
    return {
      success: false,
      message: 'Invalid profile data',
    }
  }
  try {
    await db.user.update({
      where: { id: userId },
      data: {
        student: {
          update: {
            ...values,
          },
        },
      },
    })

    revalidatePath('/dashboard/profile')
    revalidatePath(`/admin/dashboard/users/${userId}`)
    revalidatePath(`/dashboard/users/${userId}`)

    return {
      success: true,
      message: 'User profile updated successfully',
    }
  } catch (error) {
    console.error('Error updating user profile:', error)
    return {
      success: false,
      message: 'Failed to update user profile',
    }
  }
}
