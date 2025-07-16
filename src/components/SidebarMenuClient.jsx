"use client";

import {
    Calendar,
    Home,
    Inbox,
    Search,
    Settings,
    HardHat,
    Contact,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function SidebarMenuClient() {
    const pathName = usePathname();

    return (
        <SidebarMenu className="dark:text-neutral-400">
            <SidebarMenuItem>
                <SidebarMenuButton
                    className={cn(pathName === "/admin" && "bg-neutral-600")}
                    asChild
                    isActive={pathName === "/admin"}
                >
                    <Link href="/admin">
                        <Contact />
                        <span>Applications</span>
                    </Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
                <SidebarMenuButton
                    className={cn(
                        pathName === "/admin/positions" && "bg-neutral-600"
                    )}
                    asChild
                    isActive={pathName === "/admin/positions"}
                >
                    <Link href="/admin/positions">
                        <HardHat />
                        <span>Manage Positions</span>
                    </Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
    );
}
