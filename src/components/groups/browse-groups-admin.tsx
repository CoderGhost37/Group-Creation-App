'use client'

import { getAllGroups } from '@/actions/groups/getAllGroups'
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
import { Search, Users } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { toast } from 'sonner'
import type { Cohort } from '../cohorts/cohort.type'

export function BrowseGroupsAdmin({ userId, cohorts }: { userId: string; cohorts: Cohort[] }) {
  const [groups, setGroups] = React.useState<any[]>([])
  const [searchQuery, setSearchQuery] = React.useState('')
  const [selectedCohort, setSelectedCohort] = React.useState('all')
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
        })
        .catch(() => {
          toast.error('Failed to fetch groups')
          setGroups([])
          setHasMore(false)
        })
    })
  }

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

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'OPEN':
        return 'bg-green-100 text-green-700 border-green-200'
      case 'CLOSED':
        return 'bg-red-100 text-red-700 border-red-200'
      case 'DELETED':
        return 'bg-gray-100 text-gray-800 border-gray-200'
      default:
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'
    }
  }

  return (
    <div className="mt-4 space-y-6">
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

      {groups.length === 0 && !isPending ? (
        <div className="text-center text-muted-foreground py-12">No groups found.</div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <Card key={group.id} className="relative hover:shadow-md transition-all">
              <CardHeader>
                <CardTitle className="text-base truncate">{group.name}</CardTitle>
                <CardDescription className="line-clamp-2 mt-1 text-sm">
                  {group.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{group.cohort.name}</span>
                  <span
                    className={`px-2 py-0.5 font-medium text-xs rounded border ${getStatusBadgeColor(group.status)}`}
                  >
                    {group.status}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>
                      {group.membersCount}/{group.maxMembers}
                    </span>
                    <div className="w-16 bg-gray-200 rounded-full h-1.5 ml-2">
                      <div
                        className="bg-blue-500 h-1.5 rounded-full transition-all"
                        style={{
                          width: `${(group.membersCount / group.maxMembers) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                  <Link href={`/admin/dashboard/groups/${group.id}`}>
                    <Button variant="outline">View</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {hasMore && (
        <div className="flex justify-center">
          <Button onClick={handleLoadMore} loading={isPending}>
            Load More
          </Button>
        </div>
      )}
    </div>
  )
}
