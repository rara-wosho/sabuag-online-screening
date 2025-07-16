"use client";

import { Calendar, Home, Inbox, Search, Settings, HardHat } from "lucide-react";
import { usePathname } from "next/navigation";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";
import Link from "next/link";

export default function SidebarMenuClient() {
    const pathName = usePathname();

    return (
        <SidebarMenu className="text-neutral-400">
            <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathName === "/admin"}>
                    <Link href="/admin">
                        <Home />
                        <span>Home</span>
                    </Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathName === "/positions"}>
                    <Link href="/positions">
                        <HardHat />
                        <span>Manage Positions</span>
                    </Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
    );
}
