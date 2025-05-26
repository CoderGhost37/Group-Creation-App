import type { Metadata } from 'next'

import { getUser } from '@/actions/auth/getUser'

import { getUserProfileInfo } from '@/actions/profile/getUserProfileInfo'
import { DashboardNavbar } from '@/components/dashboard/dashboard-navbar'
import { ActivityInfo } from '@/components/profile/activity-info'
import { UserProfileInfoView } from '@/components/profile/user-profile-info-view'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export const metadata: Metadata = {
  title: 'Profile',
  description: 'Profile Page',
}

export default async function ProfilePage() {
  const user = await getUser()
  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold">User not found</h1>
      </div>
    )
  }

  const { data: profile, success } = await getUserProfileInfo(user.id)
  if (!success || !profile) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold">No profile found</h1>
      </div>
    )
  }

  return (
    <>
      <DashboardNavbar items={[{ name: 'Profile', href: '/dashboard/profile' }]} />
      <div className="w-full px-4 lg:px-6 py-4">
        <div className="flex min-h-[calc(100vh-32px-48px-24px)]">
          <div className="flex-grow overflow-x-auto overflow-hidden">
            <div className="space-y-6">
              <div>
                <p className="text-2xl font-bold tracking-tight">My Profile</p>
                <p className="text-muted-foreground">
                  Manage your profile information and view your activity.
                </p>
              </div>
              <Tabs defaultValue="profile" className="space-y-4">
                <TabsList>
                  <TabsTrigger value="profile">Profile</TabsTrigger>
                  <TabsTrigger value="activity">Activity</TabsTrigger>
                </TabsList>

                <TabsContent value="profile">
                  <UserProfileInfoView userId={user.id} userProfile={profile} />
                </TabsContent>
                <TabsContent value="activity">
                  <ActivityInfo userId={user.id} />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
