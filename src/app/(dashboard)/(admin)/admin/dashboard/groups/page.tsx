import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { getUser } from '@/actions/auth/getUser'
import { getAllCohorts } from '@/actions/cohorts/getAllCohorts'
import { DashboardNavbar } from '@/components/dashboard/dashboard-navbar'
import { BrowseGroupsAdmin } from '@/components/groups/browse-groups-admin'

export const metadata: Metadata = {
  title: 'Groups',
  description: 'Groups Page',
}

export default async function AdminGroupPage() {
  const [user, cohorts] = await Promise.all([getUser(), getAllCohorts()])
  if (!user) {
    redirect('/login')
  }
  return (
    <>
      <DashboardNavbar items={[{ name: 'Groups', href: '/admin/dashboard/groups' }]} />
      <div className="w-full px-4 lg:px-6 py-4">
        <div className="flex min-h-[calc(100vh-32px-48px-24px)]">
          <div className="flex-grow overflow-x-auto overflow-hidden">
            <BrowseGroupsAdmin userId={user.id} cohorts={cohorts} />
          </div>
        </div>
      </div>
    </>
  )
}
