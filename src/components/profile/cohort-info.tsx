import { getUserCohortInfo } from '@/actions/profile/getUserCohortsInfo'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export async function CohortInfo({ userId }: { userId: string }) {
  const { data: userCohorts, success } = await getUserCohortInfo(userId)
  if (!success || !userCohorts) {
    return (
      <div className="flex h-24 items-center justify-center rounded-md border border-dashed">
        <p className="text-sm text-muted-foreground">This user is not enrolled in any cohorts.</p>
      </div>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Enrolled Cohorts</CardTitle>
        <CardDescription>Cohorts this user is enrolled in</CardDescription>
      </CardHeader>
      <CardContent>
        {userCohorts.length === 0 ? (
          <div className="flex h-24 items-center justify-center rounded-md border border-dashed">
            <p className="text-sm text-muted-foreground">
              This user is not enrolled in any cohorts.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {userCohorts.map((cohort) => (
              <div
                key={cohort.id}
                className="flex items-center justify-between rounded-lg border p-4"
              >
                <div>
                  <h4 className="font-medium">{cohort.name}</h4>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
