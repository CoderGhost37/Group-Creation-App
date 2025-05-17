import type { Metadata } from 'next'

import { ForgotPasswordForm } from '@/components/auth/forgot-password'

export const metadata: Metadata = {
  title: 'Forgot Password',
  description: 'Forgot your password? Reset it here.',
}

export default function ForgotPasswordPage() {
  return <ForgotPasswordForm />
}
