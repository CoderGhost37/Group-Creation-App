'use client'

import type { UserStatus } from '@/generated/prisma'
import { MoreVertical, Shield } from 'lucide-react'
import React from 'react'
import { toast } from 'sonner'

import { banUser } from '@/actions/users/banUser'
import { unbanUser } from '@/actions/users/unbanUser'
import { UserAvatar } from '@/components/avatar'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { DeleteUserForm } from '@/components/users/delete-user'

interface AdminActionProps {
  userId: string
  user: {
    name: string
    email: string
    status: UserStatus
  }
}

export function AdminActions({ userId, user }: AdminActionProps) {
  const [isBanUserDialogOpen, setIsBanUserDialogOpen] = React.useState(false)
  const [isDeleteUserDialogOpen, setIsDeleteUserDialogOpen] = React.useState(false)
  const [banReson, setBanReason] = React.useState('')
  const [isPending, startTransition] = React.useTransition()

  const banUnbanUser = () => {
    startTransition(() => {
      if (user.status === 'BANNED') {
        unbanUser(userId).then((res) => {
          if (res.success) {
            toast.success(res.message)
          } else {
            toast.error(res.message)
          }
        })
      } else {
        banUser(userId, banReson).then((res) => {
          if (res.success) {
            toast.success(res.message)
          } else {
            toast.error(res.message)
          }
        })
      }
    })
  }

  return (
    <div className="">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <Shield className="mr-2 h-4 w-4" />
            Admin Actions
            <MoreVertical className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {user.status === 'ACTIVE' ? (
            <DropdownMenuItem onClick={() => setIsBanUserDialogOpen(true)} className="text-red-600">
              Ban User
            </DropdownMenuItem>
          ) : user.status === 'BANNED' ? (
            <DropdownMenuItem
              onClick={() => setIsBanUserDialogOpen(true)}
              className="text-green-600"
            >
              Unban User
            </DropdownMenuItem>
          ) : null}
          <DropdownMenuItem
            onClick={() => setIsDeleteUserDialogOpen(true)}
            className="text-red-600"
          >
            Delete User
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <AlertDialog open={isBanUserDialogOpen} onOpenChange={setIsBanUserDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              {user.status === 'BANNED' ? 'Unban User' : 'Ban User'}
            </AlertDialogTitle>
            <AlertDialogDescription>
              {user.status === 'BANNED'
                ? 'Are you sure you want to unban this user?'
                : 'Are you sure you want to ban this user? They will no longer be able to access the platform.'}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="py-4">
            <div className="flex items-center space-x-4">
              <UserAvatar name={user.name} size="30" />
              <div>
                <p className="font-medium">{user.name}</p>
                <p className="text-sm text-muted-foreground">{user.email}</p>
              </div>
            </div>
            {user.status !== 'BANNED' && (
              <div className="mt-4">
                <Label htmlFor="ban-reason">Reason for ban (optional)</Label>
                <Input
                  id="ban-reason"
                  className="mt-1"
                  placeholder="Enter reason for banning this user"
                  value={banReson}
                  onChange={(e) => setBanReason(e.target.value)}
                />
              </div>
            )}
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction asChild>
              <Button onClick={banUnbanUser} loading={isPending}>
                {user.status === 'BANNED' ? 'Unban User' : 'Ban User'}
              </Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <DeleteUserForm
        isOpen={isDeleteUserDialogOpen}
        onClose={() => setIsDeleteUserDialogOpen(false)}
        user={{
          id: userId,
          ...user,
        }}
      />
    </div>
  )
}
