import type { Metadata } from 'next'

import { getAllUsers } from '@/actions/users/getAllUsers'
import { DashboardNavbar } from '@/components/dashboard/dashboard-navbar'
import { Users } from '@/components/users/users'

export const metadata: Metadata = {
  title: 'Users',
  description: 'Users Page',
}

export default async function AdminUsersPage() {
  const users = await getAllUsers()
  return (
    <>
      <DashboardNavbar items={[{ name: 'Users', href: '/admin/dashboard/users' }]} />
      <div className="w-full px-4 lg:px-6 py-4">
        <div className="flex min-h-[calc(100vh-32px-48px-24px)]">
          <div className="flex-grow overflow-x-auto overflow-hidden">
            <Users users={users} />
          </div>
        </div>
      </div>
    </>
  )
}
