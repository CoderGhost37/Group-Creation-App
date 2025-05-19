import { UserRole } from '@/generated/prisma'
import { Layers, UserCircle, Users } from 'lucide-react'

export function getSidebarItems(role: UserRole) {
  if (role === UserRole.ADMIN) {
    return adminSidebarItems
  }
  if (role === UserRole.USER) {
    return studentSidebarItems
  }
  return []
}

const adminSidebarItems = [
  {
    title: 'Cohorts',
    icon: Layers,
    link: '/admin/dashboard/cohorts',
  },
  {
    title: 'Users',
    icon: Users,
    link: '/admin/dashboard/users',
  },
]

const studentSidebarItems = [
  {
    title: 'Cohorts',
    icon: Layers,
    link: '/dashboard/cohorts',
  },
  {
    title: 'Groups',
    icon: Users,
    link: '/dashboard/groups',
  },
  {
    title: 'Profile',
    icon: UserCircle,
    link: '/dashboard/profile',
  },
]
