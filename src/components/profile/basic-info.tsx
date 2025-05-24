import { getBasicUserInfo } from '@/actions/profile/getBasicUserInfo'
import { Badge } from '@/components/ui/badge'
import { format } from 'date-fns'

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'ACTIVE':
      return <Badge className="bg-green-100 text-green-800">Active</Badge>
    case 'BANNED':
      return <Badge className="bg-purple-100 text-purple-800">Banned</Badge>
    case 'DELETED':
      return <Badge className="bg-red-100 text-red-800">Deleted</Badge>
    default:
      return <Badge className="bg-blue-100 text-blue-800">{status}</Badge>
  }
}

const getRoleBadge = (role: string) => {
  switch (role) {
    case 'ADMIN':
      return <Badge className="bg-purple-100 text-purple-800">Admin</Badge>
    case 'USER':
      return <Badge className="bg-blue-100 text-blue-800">User</Badge>
    default:
      return <Badge>{role}</Badge>
  }
}

export async function BasicInfo({ userId }: { userId: string }) {
  const { data: basicInfo, success } = await getBasicUserInfo(userId)
  if (!success || !basicInfo) {
    return <div className="text-sm">User not found</div>
  }

  return (
    <div className="flex flex-wrap items-center gap-4">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-muted-foreground">Status:</span>
        {getStatusBadge(basicInfo.status)}
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-muted-foreground">Role:</span>
        {getRoleBadge(basicInfo.role)}
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-muted-foreground">Joined:</span>
        <span className="text-sm">{format(basicInfo.createdAt, 'MMM dd, yyyy')}</span>
      </div>
      {basicInfo.bannedAt && (
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-muted-foreground">Banned:</span>
          <span className="text-sm">{format(basicInfo.bannedAt, 'MMM dd, yyyy')}</span>
        </div>
      )}
      {basicInfo.deletedAt && (
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-muted-foreground">Deleted:</span>
          <span className="text-sm">{format(basicInfo.deletedAt, 'MMM dd, yyyy')}</span>
        </div>
      )}
    </div>
  )
}
