import { getUserActivityLogsInfo } from '@/actions/profile/getUserActivityLogs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import type { LogType } from '@/generated/prisma'
import { format } from 'date-fns'
import {
  Calendar,
  UserCheck,
  UserCheck2,
  UserCircle2,
  UserCog,
  UserLock,
  UserMinus,
  UserMinus2,
  UserPlus,
  UserX,
  Users,
} from 'lucide-react'

const getLogIcon = (type: LogType) => {
  switch (type) {
    case 'ACCOUNT_CREATED':
      return <UserPlus className="h-5 w-5 text-green-500" />
    case 'ACCOUNT_UPDATED':
      return <UserCog className="h-5 w-5 text-orange-500" />
    case 'ACCOUNT_DELETED':
      return <UserX className="h-5 w-5 text-red-500" />
    case 'ACCOUNT_BANNED':
      return <UserLock className="h-5 w-5 text-purple-500" />
    case 'JOIN_COHORT':
      return <Calendar className="h-5 w-5 text-cyan-500" />
    case 'JOIN_GROUP':
      return <UserPlus className="h-5 w-5 text-blue-500" />
    case 'LEAVE_GROUP':
      return <UserMinus className="h-5 w-5 text-red-500" />
    case 'CREATE_GROUP':
      return <Users className="h-5 w-5 text-blue-500" />
    case 'DELETE_GROUP':
      return <UserX className="h-5 w-5 text-red-500" />
    case 'SEND_GROUP_JOIN_REQUEST':
      return <UserCircle2 className="h-5 w-5 text-yellow-500" />
    case 'GROUP_JOIN_REQUEST_ACCEPTED':
      return <UserCheck className="h-5 w-5 text-green-500" />
    case 'GROUP_JOIN_REQUEST_REJECTED':
      return <UserMinus className="h-5 w-5 text-red-500" />
    case 'ACCEPTED_GROUP_JOIN_REQUEST':
      return <UserCheck2 className="h-5 w-5 text-green-500" />
    case 'REJECTED_GROUP_JOIN_REQUEST':
      return <UserMinus2 className="h-5 w-5 text-red-500" />
    default:
      return <div className="h-5 w-5 rounded-full bg-gray-200" />
  }
}

const getLogTypeDescription = (type: LogType) => {
  switch (type) {
    case 'ACCOUNT_CREATED':
      return 'Account created'
    case 'ACCOUNT_UPDATED':
      return 'Account updated'
    case 'ACCOUNT_DELETED':
      return 'Account deleted'
    case 'ACCOUNT_BANNED':
      return 'Account banned'
    case 'JOIN_COHORT':
      return 'Joined a cohort'
    case 'JOIN_GROUP':
      return 'Joined a group'
    case 'LEAVE_GROUP':
      return 'Left a group'
    case 'CREATE_GROUP':
      return 'Created a group'
    case 'DELETE_GROUP':
      return 'Deleted a group'
    case 'SEND_GROUP_JOIN_REQUEST':
      return 'Sent a group join request'
    case 'GROUP_JOIN_REQUEST_ACCEPTED':
      return 'Group join request accepted'
    case 'GROUP_JOIN_REQUEST_REJECTED':
      return 'Group join request rejected'
    case 'ACCEPTED_GROUP_JOIN_REQUEST':
      return 'Accepted group join request'
    case 'REJECTED_GROUP_JOIN_REQUEST':
      return 'Rejected group join request'
    default:
      return 'Activity logged'
  }
}

export async function ActivityInfo({ userId }: { userId: string }) {
  const { data: userLogs, success } = await getUserActivityLogsInfo(userId)
  if (!success || !userLogs) {
    return (
      <div className="flex h-24 items-center justify-center rounded-md border border-dashed">
        <p className="text-sm text-muted-foreground">This user has no activity logs.</p>
      </div>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Activity Log</CardTitle>
        <CardDescription>User's activity on the platform</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="max-h-[500px] overflow-y-auto">
          <div className="divide-y">
            {userLogs.map((log) => (
              <div key={log.id} className="flex items-start p-4 hover:bg-muted/50">
                <div className="mr-4 flex h-9 w-9 items-center justify-center rounded-full bg-muted">
                  {getLogIcon(log.type)}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <p className="font-medium">{log.action}</p>
                    <span className="ml-2 whitespace-nowrap text-xs text-muted-foreground">
                      {format(log.createdAt, 'MMM dd, yyyy')}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{log.details}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {getLogTypeDescription(log.type)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
