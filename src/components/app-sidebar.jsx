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
import ThemeSidebarGroup from "./ThemeSidebarGroup";
import { logout } from "@/lib/actions/auth";

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon">
            <SidebarHeader className="border-b dark:border-neutral-800 py-2">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton variant="outline" asChild>
                            <Link
                                href="/profile"
                                className="py-5 flex items-center"
                            >
                                <Image
                                    alt="logo"
                                    src="/official-sabuag.png"
                                    width={30}
                                    height={30}
                                />
                                <div className="flex flex-col">
                                    <span className="font-bold tracking-widest">
                                        SABUAG
                                    </span>
                                    <span className="dark:text-neutral-400 text-xs">
                                        Campus Publication
                                    </span>
                                </div>
                                <div className="md:hidden ms-auto">
                                    <SidebarTrigger />
                                    <span></span>
                                </div>
                            </Link>
                        </SidebarMenuButton>
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

                <ThemeSidebarGroup />

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
                                        onClick={logout}
                                        asChild
                                        className="hover:bg-red-400/10 duration-200 transition-colors hover:text-red-400"
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
