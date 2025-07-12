'use client'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import type { GroupLogType } from '@/generated/prisma'
import { format } from 'date-fns'

interface GroupLogsProps {
  groupLogs: Array<{
    id: string
    type: GroupLogType
    content: string
    createdAt: Date
  }>
}

export function GroupLogs({ groupLogs }: GroupLogsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Group Logs</CardTitle>
        <CardDescription>Activity and announcements in this group</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {groupLogs.map((log) => (
            <div
              key={log.id}
              className={`rounded-lg border p-4 ${log.type === 'ANNOUNCEMENT' ? 'bg-blue-50' : ''}`}
            >
              <div className="flex items-center justify-between">
                <Badge
                  variant="outline"
                  className={`${
                    log.type === 'ANNOUNCEMENT'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {log.type}
                </Badge>
                <div className="flex flex-col items-end">
                  <span className="text-sm text-muted-foreground">
                    {format(log.createdAt, 'MMMM dd, yyyy')}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {format(log.createdAt, 'hh:mm a')}
                  </span>
                </div>
              </div>
              <p className="mt-2 whitespace-pre">{log.content}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
