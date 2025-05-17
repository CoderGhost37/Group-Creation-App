import type { Metadata } from 'next'

import { ResetPasswordForm } from '@/components/auth/reset-password'

export const metadata: Metadata = {
  title: 'Reset Password',
  description: 'Reset password.',
}

export default async function ResetPasswordPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { token } = await searchParams
  return <ResetPasswordForm id={token as string} />
}
