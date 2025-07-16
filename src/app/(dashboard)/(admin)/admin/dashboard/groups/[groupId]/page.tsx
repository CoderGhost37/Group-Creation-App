import { getGroupDetails } from '@/actions/groups/getGroupDetails'
import { getGroupLogs } from '@/actions/groups/getGroupLogs'
import { getGroupMemberDetails } from '@/actions/groups/getGroupMemberDetails'
import { format } from 'date-fns'
import { Calendar, Layers, Users } from 'lucide-react'
import type { Metadata } from 'next'

import { DashboardNavbar } from '@/components/dashboard/dashboard-navbar'
import { GroupLogs } from '@/components/group/group-logs'
import { GroupMembers } from '@/components/group/group-members'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { GroupStatus } from '@/generated/prisma'
import { db } from '@/lib/prisma'
import { cn } from '@/lib/utils'

export async function generateMetadata({
  params,
}: { params: Promise<{ groupId: string }> }): Promise<Metadata> {
  const { groupId } = await params
  const group = await db.group.findUnique({
    where: {
      id: groupId,
    },
    select: {
      name: true,
      description: true,
    },
  })

  return {
    title: group?.name,
    description: group?.description,
  }
}

export async function generateStaticParams() {
  const slugs = await db.group.findMany({
    select: {
      id: true,
    },
  })
  return slugs.map((slug: { id: string }) => ({ groupId: slug.id }))
}

export default async function AdminGroupPage({
  params,
}: {
  params: Promise<{ groupId: string }>
}) {
  const groupId = (await params).groupId

  const [group, groupLogs, groupMembers] = await Promise.all([
    getGroupDetails(groupId),
    getGroupLogs(groupId),
    getGroupMemberDetails(groupId),
  ])
  if (!group) {
    return null
  }

  return (
    <>
      <DashboardNavbar
        items={[
          { name: 'Groups', href: '/admin/dashboard/groups' },
          { name: group.name, href: `/admin/dashboard/groups/${group.id}` },
        ]}
      />
      <div className="w-full px-4 lg:px-6 py-4">
        <div className="flex min-h-[calc(100vh-32px-48px-24px)]">
          <div className="flex-grow overflow-x-auto overflow-hidden">
            <div className="space-y-6">
              <div className="flex justify-between gap-4 items-center">
                <p className="text-2xl font-bold tracking-tight">{group.name}</p>
              </div>
              <div className="space-y-2">
                <p className="text-muted-foreground">{group.description}</p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2">
                    <Badge
                      variant="outline"
                      className={cn(
                        group.status === GroupStatus.OPEN && 'bg-blue-50 text-blue-700',
                        group.status === GroupStatus.CLOSED && 'bg-red-50 text-red-700',
                        group.status === GroupStatus.DELETED && 'bg-gray-50 text-gray-700'
                      )}
                    >
                      {group.status}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>
                      {group.membersCount}/{group.maxMembers}
                    </span>
                    <div className="w-16 bg-gray-200 rounded-full h-1.5 ml-2">
                      <div
                        className="bg-blue-500 h-1.5 rounded-full transition-all"
                        style={{ width: `${(group.membersCount / group.maxMembers) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Created on {format(group.createdAt, 'MMMM dd, yyyy')}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Layers className="h-4 w-4" />
                    <span>{group.cohort?.name}</span>
                  </div>
                </div>
              </div>

              <Tabs defaultValue="logs" className="space-y-4">
                <TabsList className="w-full justify-start sm:w-auto">
                  <TabsTrigger value="logs">Logs</TabsTrigger>
                  <TabsTrigger value="members">Members</TabsTrigger>
                </TabsList>
                <TabsContent value="logs">
                  <GroupLogs groupLogs={groupLogs} />
                </TabsContent>
                <TabsContent value="members">
                  <GroupMembers
                    groupId={group.id}
                    groupMembers={groupMembers}
                    isAdmin={false}
                    adminId={group.adminUserId as string}
                    isAdminUser={true}
                  />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
