import { UserRole } from '@/generated/prisma'
import * as z from 'zod'

export const SessionSchema = z.object({
  id: z.string().min(1),
  name: z.string(),
  role: z.string().refine((val) => Object.values(UserRole).includes(val as UserRole), {
    message: 'Invalid role',
  }),
})

export type SessionUser = z.infer<typeof SessionSchema>
