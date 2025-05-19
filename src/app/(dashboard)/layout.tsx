import { getUser } from '@/actions/auth/getUser'

import { DashboardSidebar } from '@/components/dashboard/dashboard-sidebar'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { redirect } from 'next/navigation'

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const user = await getUser()
  if (!user) {
    redirect('/login')
  }

  return (
    <SidebarProvider>
      <DashboardSidebar user={user} />
      <SidebarInset className="overflow-hidden overflow-x-auto">
        <main>{children}</main>
      </SidebarInset>
    </SidebarProvider>
  )
}
