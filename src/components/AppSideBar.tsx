import { ChartAreaIcon, ChartNoAxesColumnIncreasingIcon, ChartPie, ChevronDown, Contact2, HeartPlus, LayoutDashboardIcon, LineChart, Settings, ShoppingBagIcon, ShoppingCartIcon, UsersRound } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarSeparator
} from "@/components/ui/sidebar"
import Link from "next/link"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible"

// Menu items.
const items = [
    {
        title: "Dashboard",
        url: "/dashboard",
        icon: LayoutDashboardIcon,
    },
    {
        title: "Users",
        url: "/users",
        icon: UsersRound,
    },
    {
        title: "Inventory",
        url: "/inventory",
        icon: ShoppingCartIcon,
    },
    {
        title: "Products",
        url: "/products",
        icon: ShoppingBagIcon,
    },

]
const analyticItems = [
    {
        title: "Product Analytics",
        url: "#",
        icon: ChartPie,
    },
    {
        title: "Users Analytics",
        url: "#",
        icon: ChartAreaIcon,
    },
    {
        title: "Revenue Analytics",
        url: "/analytics/revenue",
        icon: ChartNoAxesColumnIncreasingIcon

    },
    {
        title: "Sales Analytics",
        url: "#",
        icon: LineChart,
    },
]

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon">
            <SidebarHeader className="h-22" >
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Link href="/" className="flex items-center no-underline">
                                <span className="text-2xl font-extrabold text-green-700  flex items-center">
                                    AGRI
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 mx-1 text-green-500"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >

                                    </svg>
                                    (<span className="text-green-600">ONE</span>)
                                </span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarSeparator />
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <Collapsible defaultOpen title="Collapsible">
                    <SidebarGroup>
                        <SidebarGroupLabel asChild>
                            <CollapsibleTrigger>
                                Analytics
                                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                            </CollapsibleTrigger>

                        </SidebarGroupLabel>
                        <CollapsibleContent>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    {analyticItems.map((item) => (
                                        <SidebarMenuItem key={item.title}>
                                            <SidebarMenuButton asChild>
                                                <a href={item.url}>
                                                    <item.icon />
                                                    <span>{item.title}</span>
                                                </a>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    ))}

                                </SidebarMenu>
                            </SidebarGroupContent>
                        </CollapsibleContent>
                    </SidebarGroup>
                </Collapsible>
                <Collapsible defaultOpen title="Collapsible">
                    <SidebarGroup>
                        <SidebarGroupLabel asChild>
                            <CollapsibleTrigger>
                                Marketing
                                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                            </CollapsibleTrigger>
                        </SidebarGroupLabel>
                        <CollapsibleContent>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton asChild>
                                            <a href="#">
                                                Buy Crops
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton asChild>
                                            <a href="#">
                                                Sell Crops
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </CollapsibleContent>
                    </SidebarGroup>
                </Collapsible>
                <SidebarGroup>
                    <SidebarGroupLabel>Help</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a href="#">
                                        <Contact2 />
                                        Contact Us
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a href="#">
                                        <HeartPlus />
                                        Support
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel>Settings</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a href="#">
                                        <Settings className="text-color-green" />
                                        <span>Settings</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a href="#">
                                        <UsersRound />
                                        Staff
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
