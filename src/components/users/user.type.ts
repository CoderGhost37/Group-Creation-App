import type { UserStatus } from '@/generated/prisma'

export interface User {
  id: string
  name: string
  email: string
  status: UserStatus
  cohorts: {
    id: string
    name: string
  }[]
}
