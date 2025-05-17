'use server'

import { resend } from '@/lib/resend'
import { getUserByEmail } from './getUserByEmail'

export const forgotPassword = async (email: string) => {
  const user = await getUserByEmail(email)
  if (!user) {
    return { success: false, error: 'User not found' }
  }

  try {
    await resend.emails.send({
      from: `Cinnavo <${process.env.SENDING_EMAIL}>`,
      to: user.email,
      subject: 'Verify your email address',
      text: `Hello ${user.name},\n\nYou recently requested to reset your password for your Cinnavo account. Use the link below to reset it.\n\n${process.env.NEXT_PUBLIC_URL}/reset-password?token=${user.id}\n\nIf you did not request a password reset, please ignore this email or reply to let us know.\n\nThanks,\nCinnavo Team`,
    })
    return { success: true, message: 'Email sent' }
  } catch (error) {
    console.error('Error sending email:', error)
    return { success: false, error: 'Something went wrong' }
  }
}
