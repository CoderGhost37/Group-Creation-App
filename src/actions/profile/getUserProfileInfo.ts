'use server'

import { db } from '@/lib/prisma'

export const getUserProfileInfo = async (userId: string) => {
  try {
    const user = await db.user.findUnique({
      where: { id: userId },
      select: {
        name: true,
        email: true,
        student: {
          select: {
            bio: true,
            linkedIn: true,
            github: true,
            website: true,
            twitter: true,
            peerlist: true,
          },
        },
      },
    })

    if (!user || !user.student) {
      throw new Error('User not found or student profile is incomplete')
    }

    return {
      success: true,
      data: {
        name: user.name,
        email: user.email,
        bio: user.student.bio,
        linkedIn: user.student.linkedIn,
        github: user.student.github,
        website: user.student.website,
        twitter: user.student.twitter,
        peerlist: user.student.peerlist,
      },
    }
  } catch (error) {
    console.error('Error fetching user profile:', error)
    return {
      success: false,
      data: null,
    }
  }
}
