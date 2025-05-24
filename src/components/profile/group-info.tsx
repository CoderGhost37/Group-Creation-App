import { getUserGroupsInfo } from '@/actions/profile/getUserGroupsInfo'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { format } from 'date-fns'
import Link from 'next/link'

export async function GroupInfo({ userId }: { userId: string }) {
  const { data: userGroups, success } = await getUserGroupsInfo(userId)
  if (!success || !userGroups) {
    return (
      <div className="flex h-24 items-center justify-center rounded-md border border-dashed">
        <p className="text-sm text-muted-foreground">
          This user is not a member of any groups 111.
        </p>
      </div>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Group Memberships</CardTitle>
        <CardDescription>Groups this user belongs to</CardDescription>
      </CardHeader>
      <CardContent>
        {userGroups.length === 0 ? (
          <div className="flex h-24 items-center justify-center rounded-md border border-dashed">
            <p className="text-sm text-muted-foreground">
              This user is not a member of any groups.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {userGroups.map((group) => (
              <div
                key={group.id}
                className="flex items-center justify-between rounded-lg border p-4"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium">{group.name}</h4>
                    {group.role === 'Admin' && (
                      <Badge variant="outline" className="bg-purple-50 text-purple-700">
                        Admin
                      </Badge>
                    )}
                    {group.role === 'Member' && (
                      <Badge variant="outline" className="bg-blue-50 text-blue-700">
                        Member
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Joined on {format(group.joinedAt, 'MMM dd, yyyy')}
                  </p>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/dashboard/groups/${group.id}`}>View Group</Link>
                </Button>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
