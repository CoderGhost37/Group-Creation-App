'use client'

import { format } from 'date-fns'
import { Check, Clock, X } from 'lucide-react'
import React from 'react'
import { toast } from 'sonner'

import { changeRequestStatus } from '@/actions/request/changeRequestStatus'

import { UserAvatar } from '@/components/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface PendingRequests {
  id: string
  reason: string
  createdAt: Date
  studentId: string | undefined
  user: {
    id: string | undefined
    name: string | undefined
    email: string | undefined
  }
}

function ActionButtons({ requestId, type }: { requestId: string; type: 'accept' | 'reject' }) {
  const [isPending, startTransition] = React.useTransition()

  const handleAction = async () => {
    startTransition(async () => {
      changeRequestStatus(requestId, type === 'accept' ? 'ACCEPTED' : 'REJECTED')
        .then((response) => {
          if (response.success) {
            toast.success(response.message)
          } else {
            toast.error(response.error || 'An error occurred')
          }
        })
        .catch((error) => {
          console.error('Error changing request status:', error)
        })
    })
  }

  if (type === 'accept') {
    return (
      <Button size="sm" onClick={handleAction} loading={isPending}>
        <Check className="mr-2 h-4 w-4" />
        Accept
      </Button>
    )
  }

  return (
    <Button variant="outline" size="sm" onClick={handleAction} loading={isPending}>
      <X className="mr-2 h-4 w-4" />
      Reject
    </Button>
  )
}

export function GroupPendingRequests({ joinRequests }: { joinRequests: PendingRequests[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Join Requests</CardTitle>
        <CardDescription>Manage requests to join this group</CardDescription>
      </CardHeader>
      <CardContent>
        {joinRequests.length === 0 ? (
          <div className="flex h-[200px] flex-col items-center justify-center rounded-md border border-dashed p-8 text-center">
            <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
              <h3 className="mt-4 text-lg font-semibold">No pending requests</h3>
              <p className="mb-4 mt-2 text-sm text-muted-foreground">
                There are no pending requests to join this group.
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {joinRequests.map((request) => (
              <div key={request.id} className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <UserAvatar name={request.user.name || 'Test Student'} size="30" />
                    <div>
                      <p className="font-medium">{request.user.name}</p>
                      <p className="text-sm text-muted-foreground">{request.user.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{format(request.createdAt, 'PPP')}</span>
                  </div>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-muted-foreground">Reason:</p>
                  <p className="mt-1 text-sm">{request.reason}</p>
                </div>
                <div className="mt-4 flex justify-end space-x-2">
                  <ActionButtons requestId={request.id} type="reject" />
                  <ActionButtons requestId={request.id} type="accept" />
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
