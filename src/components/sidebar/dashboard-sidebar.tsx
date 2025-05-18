'use client'

import type { UserRole } from '@/generated/prisma'
import { ChevronUp, LogOut, type LucideIcon, User2 } from 'lucide-react'
import { signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useMemo } from 'react'

import { Avatar, AvatarImage } from '@/components/ui/avatar'
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
        <Link href="/">
          <Image
            src={open ? '/images/trCare.png' : '/images/logo.png'}
            alt="Logo"
            width={100}
            height={100}
            className={cn('mx-auto w-auto object-cover', open ? 'h-16' : 'h-10')}
          />
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
                  <Avatar>
                    <AvatarImage src={user.image} />
                  </Avatar>
                  <span className={cn(open ? 'font-medium block w-28 truncate' : 'hidden')}>
                    {user.name}
                  </span>
                  <ChevronUp className={cn(open ? 'ml-auto block' : 'hidden')} />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="top" className="w-auto">
                <DropdownMenuItem asChild>
                  <Link href="/dashboard/settings" className="hover:cursor-pointer">
                    <User2 className="w-4 h-4 mr-2 text-muted-foreground" />
                    <span>My Profile</span>
                  </Link>
                </DropdownMenuItem>
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
