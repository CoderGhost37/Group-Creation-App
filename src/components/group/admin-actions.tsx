'use client'

import { Shield } from 'lucide-react'
import React from 'react'
import { toast } from 'sonner'

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
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Textarea } from '@/components/ui/textarea'

import { deleteGroup } from '@/actions/groups/deleteGroup'
import { postAnnouncement } from '@/actions/groups/postAnnouncement'

export function AdminActions({ groupId }: { groupId: string }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="sm">
          <Shield className="h-4 w-4 mr-1" />
          <span>Admin Actions</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        <DropdownMenuItem asChild>
          <PostAnnouncementForm groupId={groupId} />
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <DeleteGroup groupId={groupId} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function DeleteGroup({ groupId }: { groupId: string }) {
  const [isPending, startTransition] = React.useTransition()
  const [isOpen, setIsOpen] = React.useState(false)

  function handleDelete() {
    startTransition(() => {
      deleteGroup(groupId).then((res) => {
        if (res.success) {
          toast.success(res.message)
          setIsOpen(false)
        } else {
          toast.error(res.message)
        }
      })
    })
  }

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger className="w-full text-sm text-left disabled:hover:bg-transparent disabled:text-muted-foreground/80 hover:bg-gray-100 rounded-sm px-2 py-1.5">
        Delete Group
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Group</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete this group? This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button onClick={handleDelete} loading={isPending}>
              Delete Group
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

function PostAnnouncementForm({ groupId }: { groupId: string }) {
  const [isPending, startTransition] = React.useTransition()
  const [isOpen, setIsOpen] = React.useState(false)
  const [announcement, setAnnouncement] = React.useState('')

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    startTransition(() => {
      postAnnouncement(groupId, announcement)
        .then((res) => {
          if (res.success) {
            toast.success(res.message)
            setAnnouncement('')
            setIsOpen(false)
          } else {
            toast.error(res.message)
          }
        })
        .catch(() => {
          toast.error('Failed to post announcement')
        })
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger className="w-full text-sm text-left disabled:hover:bg-transparent disabled:text-muted-foreground/80 hover:bg-gray-100 rounded-sm px-2 py-1.5">
        Post Announcement
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Post Announcement</DialogTitle>
          <DialogDescription>
            Here you can post an announcement to all group members.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit}>
          <Textarea
            value={announcement}
            onChange={(e) => setAnnouncement(e.target.value)}
            placeholder="Type your announcement here..."
            className="h-40"
          />

          <div className="mt-4 flex justify-end">
            <Button type="submit" loading={isPending}>
              Post Announcement
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
