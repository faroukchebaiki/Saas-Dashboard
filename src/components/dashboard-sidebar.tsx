import type * as React from "react"
import { Home, ShoppingCart, CreditCard, BarChart3, FileText, Settings } from "lucide-react"

import { SearchBar } from "@/components/search-bar"
import { UserProfile } from "@/components/user-profile"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

// Navigation data
const navigationItems = [
  {
    title: "Main",
    items: [
      {
        title: "Home",
        url: "#",
        icon: Home,
      },
      {
        title: "Orders",
        url: "#",
        icon: ShoppingCart,
      },
      {
        title: "Payments",
        url: "#",
        icon: CreditCard,
      },
      {
        title: "Analytics",
        url: "#",
        icon: BarChart3,
      },
      {
        title: "Reports",
        url: "#",
        icon: FileText,
      },
      {
        title: "Settings",
        url: "#",
        icon: Settings,
      },
    ],
  },
]

export function DashboardSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <UserProfile />
        <SearchBar />
      </SidebarHeader>
      <SidebarContent>
        {navigationItems.map((section) => (
          <SidebarGroup key={section.title}>
            <SidebarGroupLabel>{section.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url} className="flex items-center">
                        {item.icon && <item.icon className="mr-2 h-4 w-4" />}
                        {item.title}
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter className="p-4 text-xs text-muted-foreground">v1.2.0</SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}