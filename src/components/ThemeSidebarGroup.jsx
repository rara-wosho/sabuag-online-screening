"use client";

import { Moon, Sun } from "lucide-react";
import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "./ui/sidebar";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useEffect } from "react";

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
