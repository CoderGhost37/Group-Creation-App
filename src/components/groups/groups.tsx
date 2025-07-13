import { getUserCohortInfo } from '@/actions/profile/getUserCohortsInfo'
import { getUserPendingRequestsCount } from '@/actions/request/getUserPendingRequestsCount'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '../ui/badge'
import { BrowseGroups } from './browse-groups'
import { CreateGroupForm } from './create-group-form'
import { JoinedGroups } from './joined-groups'
import { PendingRequests } from './pending-requests'

interface GroupsProps {
  userId: string
}

export async function Groups({ userId }: GroupsProps) {
  const { data: pendingRequests, success } = await getUserPendingRequestsCount()
  if (!success || pendingRequests === null) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold">Error fetching pending requests</h1>
      </div>
    )
  }

  const { data: cohorts, success: cohortsSuccess } = await getUserCohortInfo(userId)
  if (!cohortsSuccess || !cohorts) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold">Error fetching user cohorts</h1>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between gap-4 items-center">
        <div>
          <p className="text-2xl font-bold tracking-tight">Groups</p>
          <p className="text-muted-foreground">Discover and join groups within your cohorts</p>
        </div>
        <CreateGroupForm cohorts={cohorts} />
      </div>

      <Tabs defaultValue="my-groups" className="flex flex-col">
        <TabsList className="w-full">
          <TabsTrigger value="my-groups">My Groups</TabsTrigger>
          <TabsTrigger value="browse">Browse Groups</TabsTrigger>
          <TabsTrigger value="pending-requests">
            Pending Requests
            {pendingRequests > 0 && (
              <Badge variant="secondary" className="ml-2">
                {pendingRequests}
              </Badge>
            )}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="my-groups">
          <JoinedGroups />
        </TabsContent>
        <TabsContent value="browse">
          <BrowseGroups userId={userId} cohorts={cohorts} />
        </TabsContent>
        <TabsContent value="pending-requests">
          <PendingRequests />
        </TabsContent>
      </Tabs>
    </div>
  )
}
