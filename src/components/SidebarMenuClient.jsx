"use client";

import {
    HardHat,
    Contact,
    Home,
    Users,
    Settings,
    MessageSquare,
} from "lucide-react";
import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "./ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function SidebarMenuClient() {
    const pathName = usePathname();
    const { setOpenMobile } = useSidebar();

    const categories = [
        {
            label: "Dashboard",
            items: [
                {
                    href: "/admin",
                    icon: <Home />,
                    label: "Home",
                    isActiveLink: pathName === "/admin",
                },
            ],
        },
        {
            label: "Management",
            items: [
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
                    label: "Members",
                    isActiveLink: pathName.startsWith("/admin/members"),
                },
            ],
        },
        {
            label: "Others",
            items: [
                {
                    href: "/admin/settings",
                    icon: <Settings />,
                    label: "Settings",
                    isActiveLink: pathName.startsWith("/admin/settings"),
                },
                {
                    href: "/admin/feedbacks",
                    icon: <MessageSquare />,
                    label: "Feedbacks",
                    isActiveLink: pathName.startsWith("/admin/feedbacks"),
                },
            ],
        },
    ];

    return (
        <>
            {categories.map((category) => (
                <SidebarGroup key={category.label}>
                    <SidebarGroupLabel>{category.label}</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {category.items.map((item) => (
                                <SidebarMenuItem key={item.label}>
                                    <SidebarMenuButton
                                        tooltip={item.label}
                                        asChild
                                        isActive={item.isActiveLink}
                                    >
                                        <Link
                                            className={cn(
                                                "text-neutral-500",
                                                item.isActiveLink &&
                                                    "dark:text-neutral-100"
                                            )}
                                            href={item.href}
                                            onClick={() => setOpenMobile(false)}
                                        >
                                            {item.icon}
                                            <span
                                                className={cn(
                                                    "dark:text-neutral-300 text-neutral-800",
                                                    item.isActiveLink &&
                                                        "dark:text-neutral-100 text-white"
                                                )}
                                            >
                                                {item.label}
                                            </span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            ))}
        </>
    );
}
