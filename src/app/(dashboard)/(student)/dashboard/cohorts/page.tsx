import type { Metadata } from 'next'

import { getUser } from '@/actions/auth/getUser'
import { getUserCohortInfo } from '@/actions/profile/getUserCohortsInfo'

import { UserCohorts } from '@/components/cohorts/user-cohorts'
import { DashboardNavbar } from '@/components/dashboard/dashboard-navbar'

export const metadata: Metadata = {
  title: 'Cohorts',
  description: 'Cohorts Page',
}

export default async function CohortsPage() {
  const user = await getUser()
  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold">User not found</h1>
      </div>
    )
  }

  const { data: cohorts, success } = await getUserCohortInfo(user.id)
  if (!success || !cohorts) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold">No cohorts found</h1>
      </div>
    )
  }

  return (
    <>
      <DashboardNavbar items={[{ name: 'Cohorts', href: '/dashboard/cohorts' }]} />
      <div className="w-full px-4 lg:px-6 py-4">
        <div className="flex min-h-[calc(100vh-32px-48px-24px)]">
          <div className="flex-grow overflow-x-auto overflow-hidden">
            <UserCohorts cohorts={cohorts} />
          </div>
        </div>
      </div>
    </>
  )
}
