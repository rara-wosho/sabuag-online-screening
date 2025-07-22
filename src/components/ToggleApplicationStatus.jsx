"use client";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

import { useState } from "react";
import { ChevronsUpDown, LoaderCircle } from "lucide-react";
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "./ui/sidebar";

import { cn } from "@/lib/utils";

export default function ToggleApplicationStatus({ applicationId, status }) {
    const [label, setLabel] = useState(status);
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (status) => {
        setLoading(true);

        try {
            const res = await fetch("/api/application-status", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status, applicationId }),
            });

            const data = await res.json();

            console.log("from handle submit", data);

            if (data.success) {
                setLabel(data.status);
                setOpen(false);
            }
        } catch (error) {
            console.log(error);
        }

        setLoading(false);
    };

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <button
                    className={cn(
                        "rounded text-sm px-2 py-1 flex items-center gap-1 cursor-pointer text-white",
                        label === "Pending" &&
                            "border text-accent-foreground bg-accent border-accent-foreground",
                        label === "Done" &&
                            "border text-emerald-600 dark:text-emerald-500 border-emerald-500 dark:border-emerald-700",
                        label === "Rejected" && "bg-red-500 dark:bg-red-700/60",
                        label === "Accepted" && "bg-emerald-700"
                    )}
                >
                    {loading && (
                        <div className="animate-spin">
                            <LoaderCircle size={14} />
                        </div>
                    )}
                    <span className="hidden md:inline-flex">Status :</span>{" "}
                    {label}
                    <ChevronsUpDown size={14} />
                </button>
            </PopoverTrigger>
            <PopoverContent className="p-0">
                <SidebarGroup>
                    <SidebarGroupLabel>Update Status</SidebarGroupLabel>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton
                                onClick={() => handleSubmit("Accepted")}
                            >
                                Accept
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <SidebarMenuButton
                                onClick={() => handleSubmit("Rejected")}
                            >
                                Reject
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <SidebarMenuButton
                                onClick={() => handleSubmit("Pending")}
                            >
                                Pending
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <SidebarMenuButton
                                onClick={() => handleSubmit("Done")}
                            >
                                Done
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroup>
            </PopoverContent>
        </Popover>
    );
}
