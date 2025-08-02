"use client";

import { HardHat, Contact, Home, Users } from "lucide-react";
import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "./ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarMenuClient() {
    const pathName = usePathname();
    const { setOpenMobile } = useSidebar();

    const main = [
        {
            href: "/admin",
            icon: <Home />,
            label: "Home",
            isActiveLink: pathName === "/admin",
        },
        {
            href: "/admin/applications",
            icon: <Contact />,
            label: "Applications",
            isActiveLink: pathName.startsWith("/admin/applications"),
        },
        {
            href: "/admin/positions",
            icon: <HardHat />,
            label: "Positions",
            isActiveLink: pathName.startsWith("/admin/positions"),
        },
        {
            href: "/admin/members",
            icon: <Users />,
            label: "Manage Members",
            isActiveLink: pathName.startsWith("/admin/members"),
        },
    ];

    return (
        <SidebarMenu className="dark:text-neutral-400">
            {main.map((item) => (
                <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton
                        tooltip={item.label}
                        asChild
                        isActive={item.isActiveLink}
                    >
                        <Link
                            href={item.href}
                            onNavigate={() => setOpenMobile(false)}
                        >
                            {item.icon}
                            <span>{item.label}</span>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            ))}
        </SidebarMenu>
    );
}
