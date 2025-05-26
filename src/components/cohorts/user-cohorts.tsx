import { format } from 'date-fns'
import { CalendarDays } from 'lucide-react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import type { Cohort } from './cohort.type'

export async function UserCohorts({ cohorts }: { cohorts: Cohort[] }) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">My Cohorts</h1>
        <p className="text-muted-foreground">View all cohorts you are enrolled in.</p>
      </div>

      {cohorts.length === 0 ? (
        <div className="flex h-[450px] flex-col items-center justify-center rounded-md border border-dashed p-8 text-center">
          <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
            <h3 className="mt-4 text-lg font-semibold">No cohorts found</h3>
            <p className="mb-4 mt-2 text-sm text-muted-foreground">
              You are not enrolled in any cohorts yet. Please contact your administrator.
            </p>
          </div>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cohorts.map((cohort) => (
            <Card key={cohort.id} className="overflow-hidden">
              <CardHeader className="pb-0">
                <CardTitle className="text-lg">{cohort.name}</CardTitle>
                <CardDescription className="line-clamp-2">{cohort.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CalendarDays className="mr-1 h-4 w-4" />
                    Started {format(cohort.startDate, 'MMMM d, yyyy')}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
