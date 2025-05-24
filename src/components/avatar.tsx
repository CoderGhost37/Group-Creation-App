'use client'

import { cn } from '@/lib/utils'
import Avatar from 'react-avatar'

interface UserAvatarProps {
  name: string
  size: string
  className?: string
}

export function UserAvatar({ name, size, className }: UserAvatarProps) {
  return <Avatar name={name} size={size} className={cn('rounded-full', className)} />
}
