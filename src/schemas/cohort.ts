import * as z from 'zod'

export const CohortSchema = z.object({
  name: z.string({
    message: 'Name is required',
  }),
  description: z.string().min(1, {
    message: 'Description is required',
  }),
  startDate: z.date({
    required_error: 'Start date is required',
  }),
})
