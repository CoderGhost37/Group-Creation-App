'use client'

import { UserRole } from '@/generated/prisma'
import { ChevronUp, LogOut, type LucideIcon } from 'lucide-react'
import { signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useMemo } from 'react'
import Avatar from 'react-avatar'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar'
import { getSidebarItems } from './sidebar-items'

import { cn } from '@/lib/utils'
import type { SessionUser } from '@/schemas/session'
import { usePathname } from 'next/navigation'

type SidebarItem = {
  title: string
  icon: LucideIcon
  link: string
  roles: string[]
}

export function DashboardSidebar({ user }: { user: SessionUser }) {
  const pathname = usePathname()
  const { open } = useSidebar()

  const items = useMemo(() => getSidebarItems(user.role as UserRole), [user.role]) as SidebarItem[]

  return (
    <Sidebar variant="inset" collapsible="icon">
      <SidebarHeader>
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className={cn('mx-auto w-auto object-cover invert', open ? 'h-10' : 'h-10')}
          />
          <span
            className={cn(
              open ? 'font-medium block w-44 truncate' : 'hidden',
              'text-xl text-center'
            )}
          >
            {user.role === UserRole.ADMIN ? 'Admin Dashboard' : 'Student Dashboard'}
          </span>
        </Link>
      </SidebarHeader>
      <SidebarContent className="mt-6">
        <SidebarGroup>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <Link href={item.link}>
                  <SidebarMenuButton
                    isActive={pathname === item.link}
                    tooltip={item.title}
                    className="flex items-center cursor-pointer"
                  >
                    {<item.icon className="font-medium w-8 h-8" />}
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="cursor-pointer">
                  <Avatar name={user.name} size="30" className="rounded-full" />
                  <span className={cn(open ? 'font-medium block w-28 truncate' : 'hidden')}>
                    {user.name}
                  </span>
                  <ChevronUp className={cn(open ? 'ml-auto block' : 'hidden')} />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="top" className="w-auto">
                <DropdownMenuItem className="hover:cursor-pointer" onClick={() => signOut()}>
                  <LogOut className="w-4 h-4 mr-2 text-muted-foreground" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
