'use client'

import { leaveGroup } from '@/actions/groups/leaveGroup'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import React from 'react'
import { toast } from 'sonner'
import { Button } from '../ui/button'

export function LeaveGroup({ groupId }: { groupId: string }) {
  const [isPending, startTransition] = React.useTransition()

  const handleLeaveGroup = async () => {
    startTransition(() => {
      leaveGroup(groupId).then((res) => {
        if (res.success) {
          toast.success(res.message)
        } else {
          toast.error(res.error)
        }
      })
    })
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size="sm">Leave Group</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action will remove you from the group and you will no longer have access to its
            resources. This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button onClick={handleLeaveGroup} loading={isPending}>
              Leave Group
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
