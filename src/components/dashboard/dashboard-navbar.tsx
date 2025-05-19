import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from '@/components/ui/sidebar'

export async function DashboardNavbar({
  items,
}: {
  items?: { name: string; href: string }[]
}) {
  const bredcrumbItems = [...(items || [])]

  return (
    <header className="group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-12 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mx-2 data-[orientation=vertical]:h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            {bredcrumbItems.slice(0, -1).map((item, index) => (
              <BreadcrumbItem key={index}>
                <BreadcrumbLink href={item.href}>{item.name}</BreadcrumbLink>
                {index < bredcrumbItems.length - 1 && <BreadcrumbSeparator />}
              </BreadcrumbItem>
            ))}
            <BreadcrumbPage>{bredcrumbItems[bredcrumbItems.length - 1].name}</BreadcrumbPage>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  )
}
