import * as z from 'zod'

export const GroupSchema = z.object({
  name: z.string({
    required_error: 'Name is required',
  }),
  description: z.string().min(1, {
    message: 'Description is required',
  }),
  cohortId: z.string({
    required_error: 'Cohort is required',
  }),
})
