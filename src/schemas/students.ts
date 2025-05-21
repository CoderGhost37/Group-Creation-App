import { z } from 'zod'

export const UploadStudentsSchema = z.object({
  cohortId: z.string(),
  file: z.instanceof(File),
})
