'use client'

import { CheckCircle, Crown, Loader2, Search, User, Users } from 'lucide-react'
import React from 'react'

import { getAllGroups } from '@/actions/groups/getGroups'

import { getUserPendingGroups } from '@/actions/groups/getUserPendingGroups'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { toast } from 'sonner'
import type { Cohort } from '../cohorts/cohort.type'
import { JoinGroupRequestForm } from '../requests/join-group-request-form'

export function BrowseGroups({ userId, cohorts }: { userId: string; cohorts: Cohort[] }) {
  const [groups, setGroups] = React.useState<any[]>([])
  const [pendingRequests, setPendingRequests] = React.useState<any[]>([])
  const [searchQuery, setSearchQuery] = React.useState('')
  const [selectedCohort, setSelectedCohort] = React.useState('all')
  const [firstTimeLoading, setFirstTimeLoading] = React.useState(true)
  const [page, setPage] = React.useState(1)
  const [hasMore, setHasMore] = React.useState(true)
  const [isPending, startTransition] = React.useTransition()

  const fetchGroups = (reset = false) => {
    startTransition(() => {
      getAllGroups(
        userId,
        searchQuery !== '' ? searchQuery : undefined,
        selectedCohort !== 'all' ? selectedCohort : undefined,
        reset ? 1 : page,
        6
      )
        .then((data) => {
          setGroups((prev) => (reset ? data : [...prev, ...data]))
          setHasMore(data.length === 6)
          setFirstTimeLoading(false)
        })
        .catch(() => {
          toast.error('Failed to fetch groups')
          setGroups([])
          setHasMore(false)
        })
    })
  }

  React.useEffect(() => {
    startTransition(() => {
      getUserPendingGroups()
        .then((data) => {
          if (data.success && data.data) {
            setPendingRequests(data.data)
          }
        })
        .catch((error) => {
          console.error('Error fetching groups:', error)
        })
    })
  }, [])

  React.useEffect(() => {
    setPage(1)
    fetchGroups(true)
  }, [searchQuery, selectedCohort])

  const handleLoadMore = () => {
    setPage((prev) => prev + 1)
  }

  React.useEffect(() => {
    if (page > 1) fetchGroups()
  }, [page])

  const getUserGroupInCohort = (cohortId: string) => {
    const group = groups.find((group) => group.cohort.id === cohortId && group.isUserMember)
    return group?.id
  }

  const canUserJoinGroup = (group: any) => {
    const cohortIdOfGroup = group.cohort.id
    const cohort = cohorts.find((c) => c.id === cohortIdOfGroup)
    const userGroupInCohort = getUserGroupInCohort(cohortIdOfGroup)
    const hasPendingRequestInGroup =
      pendingRequests.filter((request) => request.id === group.id && request.status === 'PENDING')
        .length > 0

    return cohort && !userGroupInCohort && !hasPendingRequestInGroup
  }

  return (
    <div className="mt-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="flex flex-1 items-center space-x-2">
          <Search className="h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search groups..."
            className="max-w-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-4">
          <Select value={selectedCohort} onValueChange={setSelectedCohort}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select cohort" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Cohorts</SelectItem>
              {cohorts.map((cohort: Cohort) => (
                <SelectItem key={cohort.id} value={cohort.id}>
                  {cohort.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {firstTimeLoading ? (
        <div className="flex h-[300px] items-center justify-center text-muted-foreground">
          <Loader2 className="mr-1 h-6 w-6 animate-spin" />
          <span>Loading groups...</span>
        </div>
      ) : isPending ? (
        <div className="flex items-center justify-center py-12 text-muted-foreground">
          <Loader2 className="mr-1 h-6 w-6 animate-spin" />
          <span>Loading groups...</span>
        </div>
      ) : groups.length === 0 ? (
        <div className="flex h-[300px] flex-col items-center justify-center rounded-md border border-dashed p-8 text-center">
          <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
            <h3 className="mt-4 text-lg font-semibold">No groups found</h3>
            <p className="mb-4 mt-2 text-sm text-muted-foreground">
              Try adjusting your search or filters to find groups.
            </p>
            <Button
              onClick={() => {
                setSearchQuery('')
                setSelectedCohort('all')
              }}
            >
              Clear Filters
            </Button>
          </div>
        </div>
      ) : (
        <>
          <div className="my-2 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing {groups.length} groups
              {selectedCohort !== 'all' && (
                <span> in {cohorts.find((c) => c.id === selectedCohort)?.name}</span>
              )}
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {groups.map((group) => {
              const userGroupInCohort = getUserGroupInCohort(group.cohortId)
              const isUserInDifferentGroup = userGroupInCohort && userGroupInCohort !== group.id
              const canJoin = canUserJoinGroup(group)

              return (
                <Card
                  key={group.id}
                  className={cn(
                    'overflow-hidden transition-all hover:shadow-md relative',
                    group.isUserMember && 'border-l-4 border-l-blue-500 bg-blue-50/30 shadow-sm'
                  )}
                >
                  {group.isUserMember && (
                    <div className="absolute top-3 right-3">
                      <div className="flex items-center space-x-1 bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                        <CheckCircle className="h-3 w-3" />
                        <span>Joined</span>
                      </div>
                    </div>
                  )}

                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0 pr-16">
                        <CardTitle className="text-base truncate">{group.name}</CardTitle>
                        <div className="flex items-center space-x-2 mt-1">
                          {group.isUserMember && (
                            <Badge
                              className={cn(
                                'text-xs',
                                group.isUserAdmin
                                  ? 'bg-blue-100 text-purple-700 border-purple-200'
                                  : 'bg-gray-100 text-blue-700 border-blue-200'
                              )}
                            >
                              {group.isUserAdmin ? (
                                <Crown className="inline h-3 w-3" />
                              ) : (
                                <User className="inline h-3 w-3" />
                              )}
                              {group.isUserAdmin ? 'Admin' : 'Member'}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-sm line-clamp-2 mt-2">
                      {group.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span className="truncate">{group.cohort.name}</span>
                      </div>
                      <div className="flex items-center justify-between">
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
                        <div className="flex space-x-2">
                          <Link href={`/dashboard/groups/${group.id}`}>
                            <Button variant="outline">View</Button>
                          </Link>
                          {!group.isUserMember && (
                            <JoinGroupRequestForm groupId={group.id} disabled={!canJoin} />
                          )}
                        </div>
                      </div>
                      {isUserInDifferentGroup && (
                        <div className="text-xs text-amber-600 bg-amber-50 px-2 py-1 rounded">
                          You're already in a group for this cohort
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </>
      )}

      {!firstTimeLoading && hasMore && (
        <div className="flex justify-center mt-4 ">
          <Button onClick={handleLoadMore} loading={isPending}>
            Load More
          </Button>
        </div>
      )}
    </div>
  )
}
