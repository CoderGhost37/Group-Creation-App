import type { Metadata } from 'next'

import { getUser } from '@/actions/auth/getUser'
import { DashboardNavbar } from '@/components/dashboard/dashboard-navbar'
import DashboardResetPassword from '@/components/dashboard/dashboard-reset-password'

export const metadata: Metadata = {
  title: 'Reset Password',
  description: 'Reset your password',
}

export default async function ResetPasswordPage() {
  const user = await getUser()
  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold">User not found</h1>
      </div>
    )
  }

  return (
    <>
      <DashboardNavbar items={[{ name: 'Reset Password', href: '/dashboard/reset-password' }]} />
      <div className="w-full px-4 lg:px-6 py-4">
        <div className="flex min-h-[calc(100vh-32px-48px-24px)]">
          <div className="flex-grow overflow-x-auto overflow-hidden">
            <div className="space-y-6">
              <div>
                <p className="text-2xl font-bold tracking-tight">Reset Password</p>
                <p className="text-muted-foreground">Please enter your new password below.</p>
              </div>
              <DashboardResetPassword userId={user.id} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
