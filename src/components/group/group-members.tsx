'use client'

import { removeGroupMember } from '@/actions/groups/removeGroupMember'
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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ExternalLink, UserMinus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { toast } from 'sonner'
import { UserAvatar } from '../avatar'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'

interface GroupMember {
  id: string
  name: string
  email: string
  studentId: string
}

interface GroupMemberProps {
  groupId: string
  groupMembers: Array<GroupMember>
  isAdmin: boolean
  adminId: string
  isAdminUser?: boolean
}

export function GroupMembers({
  groupId,
  groupMembers,
  isAdmin,
  adminId,
  isAdminUser,
}: GroupMemberProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Group Members</CardTitle>
        <CardDescription>{groupMembers.length} members in this group</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {groupMembers.map((member) => (
            <MemberCard
              key={member.id}
              member={member}
              isAdmin={isAdmin}
              adminId={adminId}
              groupId={groupId}
              isAdminUser={isAdminUser}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function MemberCard({
  member,
  isAdmin,
  groupId,
  adminId,
  isAdminUser,
}: {
  member: GroupMember
  isAdmin: boolean
  groupId: string
  adminId: string
  isAdminUser?: boolean
}) {
  const [isPending, startTransition] = React.useTransition()

  const handleRemoveMember = async (memberId: string) => {
    startTransition(() => {
      removeGroupMember(groupId, memberId)
        .then((response) => {
          if (response.success) {
            toast.success(response.message)
          } else {
            toast.error(response.error || 'An error occurred while removing the member')
          }
        })
        .catch((error) => {
          console.error('Error removing group member:', error)
          toast.error('Failed to remove member')
        })
    })
  }

  return (
    <div className="flex items-center justify-between rounded-lg border p-4">
      <div className="flex items-center space-x-4">
        <UserAvatar name={member.name || 'Unknown User'} size="30" />
        <div>
          <div className="flex items-center space-x-2">
            <p className="font-medium">{member.name}</p>
            {adminId === member.id && (
              <Badge variant="outline" className="bg-purple-50 text-purple-700">
                Admin
              </Badge>
            )}
          </div>
          <p className="text-sm text-muted-foreground">{member.email}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Link
          href={
            isAdminUser
              ? `/admin/dashboard/users/${member.id}`
              : `/dashboard/groups/${groupId}/user/${member.id}`
          }
        >
          <Button variant="ghost" size="sm">
            <ExternalLink className="mr-2 h-4 w-4" />
            Profile
          </Button>
        </Link>
        {isAdmin && adminId !== member.id && (
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="ghost" size="sm">
                <UserMinus className="mr-2 h-4 w-4 text-red-500" />
                Remove
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently remove the member from the
                  group.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction asChild>
                  <Button
                    variant="destructive"
                    onClick={() => handleRemoveMember(member.studentId)}
                    loading={isPending}
                  >
                    Remove Member
                  </Button>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        )}
      </div>
    </div>
  )
}
