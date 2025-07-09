import { getUserGroups } from '@/actions/groups/getUserGroups'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { format } from 'date-fns'
import { CheckCircle, Crown, Eye, User, Users } from 'lucide-react'
import Link from 'next/link'

export async function JoinedGroups() {
  const { data: groups, success } = await getUserGroups()
  if (!success || !groups) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold">Error fetching groups</h1>
      </div>
    )
  }

  return (
    <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {groups.length > 0 ? (
        groups.map((group) => (
          <Card
            key={group.id}
            className="border-l-4 border-l-blue-500 bg-blue-50/30 shadow-sm relative overflow-hidden"
          >
            <div className="absolute top-3 right-3">
              <div className="flex items-center space-x-1 bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                <CheckCircle className="h-3 w-3" />
                <span>Joined</span>
              </div>
            </div>
            <CardHeader>
              <div className="pr-16">
                <CardTitle className="text-base">{group.name}</CardTitle>
                <div className="flex items-center space-x-2 mt-1">
                  {group.role === 'Admin' ? (
                    <Badge className="text-xs bg-purple-100 text-purple-700 border-blue-200">
                      <Crown className="inline h-3 w-3" />
                      {group.role}
                    </Badge>
                  ) : (
                    <Badge className="text-xs bg-blue-100 text-blue-700 border-blue-200">
                      <User className="inline h-3 w-3" />
                      {group.role}
                    </Badge>
                  )}
                </div>
              </div>
              <CardDescription className="text-sm">{group.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="">
                  <div className="text-sm text-muted-foreground">{group.cohort.name}</div>
                  <div className="text-xs text-muted-foreground">
                    Joined on {format(group.joinedAt, 'MMM dd, yyyy')}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>
                      {group.members}/{group.maxMembers}
                    </span>
                    <div className="w-16 bg-gray-200 rounded-full h-1.5 ml-2">
                      <div
                        className="bg-blue-500 h-1.5 rounded-full transition-all"
                        style={{ width: `${(group.members / group.maxMembers) * 100}%` }}
                      />
                    </div>
                  </div>
                  <Link href={`/dashboard/groups/${group.id}`}>
                    <Button>
                      <Eye className="mr-1 h-4 w-4" />
                      View Group
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))
      ) : (
        <div className="mt-8 col-span-3 text-center">
          <h2 className="text-xl font-semibold">No Groups Joined</h2>
          <p className="text-muted-foreground">You haven't joined any groups yet.</p>
        </div>
      )}
    </div>
  )
}
