'use client'

import React from 'react'
import { toast } from 'sonner'

import { deleteUser } from '@/actions/users/deleteUser'
import { UserAvatar } from '@/components/avatar'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

interface DeleteUserFormProps {
  user: {
    id: string
    name: string
    email: string
  }
  isOpen: boolean
  onClose: () => void
}

export function DeleteUserForm({ isOpen, user, onClose }: DeleteUserFormProps) {
  const [isPending, startTransition] = React.useTransition()

  const handleDelete = () => {
    startTransition(async () => {
      deleteUser(user.id).then((data) => {
        if (data.success) {
          toast.success(data.message)
          onClose()
        } else {
          toast.error(data.message)
        }
      })
    })
  }

  return (
    <Dialog open={isOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete User</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this user? This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <div className="p-4 border rounded">
          <div className="flex items-center space-x-4">
            <UserAvatar name={user.name} size="30" />
            <div>
              <p className="font-medium">{user.name}</p>
              <p className="text-sm text-muted-foreground">{user.email}</p>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant="destructive"
            className="text-white"
            onClick={handleDelete}
            loading={isPending}
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
