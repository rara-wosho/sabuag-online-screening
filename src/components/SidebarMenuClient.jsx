"use client";

import { HardHat, Contact } from "lucide-react";
import { usePathname } from "next/navigation";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";
import Link from "next/link";

export default function SidebarMenuClient() {
    const pathName = usePathname();

    const main = [
        {
            href: "/admin",
            icon: <Contact />,
            label: "Applications",
            isActiveLink:
                pathName.startsWith("/admin/applications") ||
                pathName === "/admin",
        },
        {
            href: "/admin/positions",
            icon: <HardHat />,
            label: "Positions",
            isActiveLink: pathName.startsWith("/admin/positions"),
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
                        <Link href={item.href}>
                            {item.icon}
                            <span>{item.label}</span>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            ))}
        </SidebarMenu>
    );
}
