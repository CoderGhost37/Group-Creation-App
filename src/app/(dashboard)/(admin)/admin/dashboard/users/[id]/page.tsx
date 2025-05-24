import { ArrowLeft } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

import { DashboardNavbar } from '@/components/dashboard/dashboard-navbar'
import { ActivityInfo } from '@/components/profile/activity-info'
import { AdminActions } from '@/components/profile/admin-action'
import { BasicInfo } from '@/components/profile/basic-info'
import { CohortInfo } from '@/components/profile/cohort-info'
import { GroupInfo } from '@/components/profile/group-info'
import { ProfileInfo } from '@/components/profile/profile-info'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { db } from '@/lib/prisma'

export async function generateMetadata({
  params,
}: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params

  const user = await db.user.findUnique({
    where: { id },
    select: {
      name: true,
    },
  })

  return {
    title: `${user?.name}`,
  }
}

export async function generateStaticParams() {
  const slugs = await db.user.findMany({
    select: {
      id: true,
    },
  })
  return slugs.map((slug: { id: string }) => ({ id: slug.id }))
}

export default async function AdminUserDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const userId = (await params).id
  const user = await db.user.findUnique({
    where: { id: userId },
    select: {
      name: true,
      email: true,
      status: true,
    },
  })
  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold">User not found</h1>
      </div>
    )
  }

  return (
    <>
      <DashboardNavbar
        items={[
          { name: 'Users', href: '/admin/dashboard/users' },
          { name: user.name, href: `/admin/dashboard/users/${userId}` },
        ]}
      />
      <div className="w-full px-4 lg:px-6 py-4">
        <div className="flex min-h-[calc(100vh-32px-48px-24px)]">
          <div className="flex-grow overflow-x-auto overflow-hidden">
            <div className="space-y-6">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div className="flex items-center gap-4">
                  <Link href="/admin/dashboard/users">
                    <Button variant="outline" size="icon">
                      <ArrowLeft className="h-4 w-4" />
                    </Button>
                  </Link>
                  <div>
                    <p className="text-2xl font-bold tracking-tight">User Profile</p>
                    <p className="text-muted-foreground">View and manage user details</p>
                  </div>
                </div>
                <AdminActions user={user} userId={userId} />
              </div>

              <BasicInfo userId={userId} />

              <Tabs defaultValue="profile" className="space-y-4">
                <TabsList>
                  <TabsTrigger value="profile">Profile</TabsTrigger>
                  <TabsTrigger value="cohorts">Cohorts</TabsTrigger>
                  <TabsTrigger value="groups">Groups</TabsTrigger>
                  <TabsTrigger value="activity">Activity</TabsTrigger>
                </TabsList>

                <TabsContent value="profile">
                  <ProfileInfo userId={userId} />
                </TabsContent>
                <TabsContent value="cohorts">
                  <CohortInfo userId={userId} />
                </TabsContent>
                <TabsContent value="groups">
                  <GroupInfo userId={userId} />
                </TabsContent>
                <TabsContent value="activity">
                  <ActivityInfo userId={userId} />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
