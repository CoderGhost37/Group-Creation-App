import { IoCheckmarkDoneOutline } from 'react-icons/io5'

export const FormSuccess = ({ message }: { message: string | null }) => {
  if (!message) return null

  return (
    <div className="flex items-center gap-2 rounded-md bg-emerald-500/15 p-3 text-sm text-emerald-500">
      <IoCheckmarkDoneOutline className="h-4 w-4" />
      <p>{message}</p>
    </div>
  )
}
