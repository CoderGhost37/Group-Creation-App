import { getUserPendingGroups } from '@/actions/groups/getUserPendingGroups'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { format } from 'date-fns'
import { Clock, Eye } from 'lucide-react'
import Link from 'next/link'

export async function PendingRequests() {
  const { data: groups, success } = await getUserPendingGroups()
  if (!success || !groups) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold">Error fetching groups</h1>
      </div>
    )
  }

  return (
    <div className="mt-4">
      {groups.length === 0 ? (
        <div className="flex h-[300px] flex-col items-center justify-center rounded-md border border-dashed p-8 text-center">
          <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
            <h3 className="mt-4 text-lg font-semibold">No pending requests</h3>
            <p className="mb-4 mt-2 text-sm text-muted-foreground">
              You don&apos;t have any pending group join requests.
            </p>
          </div>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((request) => (
            <Card key={request.id}>
              <CardHeader>
                <CardTitle className="text-lg">{request.name}</CardTitle>
                <CardDescription>Cohort: {request.cohort.name}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Requested on {format(request.requestedAt, 'PPP')}</span>
                </div>
              </CardContent>
              <CardContent className="pt-0 flex gap-4 items-center">
                <Button variant="outline" className="w-full bg-transparent">
                  Withdraw Request
                </Button>
                <Link href={`/dashboard/groups/${request.id}`} className="w-full">
                  <Button>
                    <Eye className="mr-1 h-4 w-4" />
                    View Group
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
