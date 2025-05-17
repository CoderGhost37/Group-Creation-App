'use server'

import { db } from '@/lib/prisma'
import bcrypt from 'bcryptjs'

export const resetPassword = async (id: string, password: string) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10)
    await db.user.update({
      where: {
        id,
      },
      data: {
        password: hashedPassword,
      },
    })
    return { success: true, message: 'Password reset successfully' }
  } catch (error) {
    console.error('Error resetting password:', error)
    return { success: false, error: 'Something went wrong' }
  }
}
