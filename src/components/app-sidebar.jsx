"use client";

import { Settings, UsersRound, Bell, LogOut, Mail } from "lucide-react";

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
    SidebarTrigger,
} from "@/components/ui/sidebar";
import SidebarMenuClient from "./SidebarMenuClient";
import Image from "next/image";
import Link from "next/link";
import { logout } from "@/lib/actions/auth";

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon">
            <SidebarHeader className="border-b dark:border-neutral-800 py-2">
                <SidebarMenu>
                    <SidebarMenuItem className="flex items-center justify-between">
                        <SidebarMenuButton
                            variant="outline"
                            className="active:bg-transparent py-5 flex items-center dark:hover:text-neutral-300 bg-transparent hover:bg-transparent"
                        >
                            <Image
                                alt="logo"
                                src="/official-sabuag.png"
                                width={25}
                                height={30}
                            />
                            <div className="flex flex-col truncate w-full ms-1">
                                <p className="font-bold uppercase">Sabuag</p>
                                <p className="font-medium text-xs dark:text-neutral-400">
                                    Campus Publication
                                </p>
                            </div>
                        </SidebarMenuButton>
                        <div className="md:hidden ms-auto">
                            <SidebarTrigger />
                        </div>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            {/* sidebar main content  */}
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Main</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenuClient />
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel>Upcoming Features</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu className="dark:text-neutral-400">
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <div>
                                        <UsersRound />
                                        <span>Manage Members</span>
                                    </div>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <div>
                                        <Bell />
                                        <span>Notifications</span>
                                    </div>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <div>
                                        <Settings />
                                        <span>Settings</span>
                                    </div>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <div className="py-4 border-t mt-2">
                                <SidebarMenuItem className="text-destructive">
                                    <SidebarMenuButton
                                        onClick={() => logout("/admin")}
                                        asChild
                                        className="hover:bg-red-400/10 duration-200 cursor-pointer transition-colors hover:text-red-400"
                                    >
                                        <div>
                                            <LogOut />
                                            <span>Logout</span>
                                        </div>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            </div>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="border-t dark:border-neutral-800">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton>
                            <Mail />
                            <span>Feedback</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
}
