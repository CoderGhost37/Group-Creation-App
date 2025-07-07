import { CreateGroupForm } from './create-group-form'

interface GroupsProps {
  userId: string
}

export function Groups({ userId }: GroupsProps) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between gap-4 items-center">
        <p className="text-2xl font-bold tracking-tight">Groups</p>
        <CreateGroupForm userId={userId} />
      </div>
    </div>
  )
}
