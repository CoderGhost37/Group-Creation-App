import type { Metadata } from 'next'

import { getAllCohorts } from '@/actions/cohorts/getAllCohorts'
import Cohorts from '@/components/cohorts/cohorts'
import { DashboardNavbar } from '@/components/dashboard/dashboard-navbar'

export const metadata: Metadata = {
  title: 'Cohorts',
  description: 'Cohorts Page',
}

export default async function AdminCohortPage() {
  const cohorts = await getAllCohorts()
  return (
    <>
      <DashboardNavbar items={[{ name: 'Cohorts', href: '/admin/dashboard/cohorts' }]} />
      <div className="w-full px-4 lg:px-6 py-4">
        <div className="flex min-h-[calc(100vh-32px-48px-24px)]">
          <div className="flex-grow overflow-x-auto overflow-hidden">
            <Cohorts cohorts={cohorts} />
          </div>
        </div>
      </div>
    </>
  )
}
