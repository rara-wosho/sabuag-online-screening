"use client";

import * as React from "react";
import { ChevronRight, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export function ThemeToggler({ className }) {
    const { setTheme } = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleToggleTheme = (theme) => {
        setTheme(theme);
        setOpen(false);
    };

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <button
                    className={cn(
                        "text-neutral-700 dark:text-neutral-300 cursor-pointer",
                        className
                    )}
                >
                    <Sun size={20} className="inline-block dark:hidden" />
                    <Moon size={20} className="hidden dark:inline-block" />
                    <span className="sr-only">Toggle theme</span>
                </button>
            </PopoverTrigger>
            <PopoverContent className="p-2 w-40">
                <div className="flex flex-col justify-start items-start">
                    <Button
                        className="w-full p-0"
                        variant="ghost"
                        onClick={() => handleToggleTheme("light")}
                    >
                        <span className="w-full p-2 text-start">Light</span>
                    </Button>
                    <Button
                        className="w-full p-0"
                        variant="ghost"
                        onClick={() => handleToggleTheme("dark")}
                    >
                        <span className="w-full p-2 text-start">Dark</span>
                    </Button>
                    <Button
                        className="w-full p-0"
                        variant="ghost"
                        onClick={() => handleToggleTheme("system")}
                    >
                        <span className="w-full p-2 text-start">System</span>
                    </Button>
                </div>
            </PopoverContent>
        </Popover>
    );
}
