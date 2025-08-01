"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

export function ThemeToggler() {
    const { setTheme } = useTheme();

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant="ghost"
                    className="hover:text-primary hover:bg-transparent"
                    size="icon"
                >
                    <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="p-2 w-40">
                <div className="flex flex-col justify-start items-start">
                    <Button
                        className="w-full p-0"
                        variant="ghost"
                        onClick={() => setTheme("light")}
                    >
                        <span className="w-full p-2 text-start">Light</span>
                    </Button>
                    <Button
                        className="w-full p-0"
                        variant="ghost"
                        onClick={() => setTheme("dark")}
                    >
                        <span className="w-full p-2 text-start">Dark</span>
                    </Button>
                    <Button
                        className="w-full p-0"
                        variant="ghost"
                        onClick={() => setTheme("system")}
                    >
                        <span className="w-full p-2 text-start">System</span>
                    </Button>
                </div>
            </PopoverContent>
        </Popover>
    );
}
