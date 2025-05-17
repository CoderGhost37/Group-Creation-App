import { CgDanger } from 'react-icons/cg'

export const FormError = ({ message }: { message: string | null }) => {
  if (!message) return null

  return (
    <div className="flex items-center gap-2 rounded-md bg-destructive/15 p-3 text-sm text-destructive">
      <CgDanger className="h-4 w-4" />
      <p>{message}</p>
    </div>
  )
}
