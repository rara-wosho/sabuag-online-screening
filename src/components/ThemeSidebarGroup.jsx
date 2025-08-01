"use client";

import { Moon, Star, Sun } from "lucide-react";
import {
    SidebarGroup,
    SidebarGroupAction,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "./ui/sidebar";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

export default function ThemeSidebarGroup() {
    const [dark, setDark] = useLocalStorage(
        "sabuag-online-screening-dark-theme",
        true
    );

    useEffect(() => {
        if (dark) {
            document.querySelector("html").classList.add("dark");
        } else {
            document.querySelector("html").classList.remove("dark");
        }
    }, [dark]);

    return (
        <SidebarGroup>
            <SidebarGroupLabel>Theme</SidebarGroupLabel>

            <SidebarGroupContent>
                <SidebarMenu className="dark:text-neutral-400">
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            onClick={() => setDark(false)}
                            tooltip="Light mode"
                            asChild
                            className={cn(
                                dark && "opacity-45",
                                "cursor-pointer"
                            )}
                        >
                            <div>
                                <Sun />
                                <span>Light Mode</span>
                            </div>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            onClick={() => setDark(true)}
                            tooltip="Dark mode"
                            asChild
                            className={cn(
                                !dark && "opacity-45",
                                "cursor-pointer"
                            )}
                        >
                            <div>
                                <Moon />
                                <span>Dark Mode</span>
                            </div>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    );
}
