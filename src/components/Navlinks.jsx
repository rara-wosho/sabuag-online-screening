"use client";

import { cn } from "@/lib/utils";
import { ToggleThemeButton } from "./ui/ToggleThemeButton";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navlinks = ({ user }) => {
    const isMobile = useIsMobile();

    const [open, toggleOpen] = useState(false);
    const pathname = usePathname();

    if (pathname.startsWith("/admin") || pathname === "/login") return null;

    return (
        <div className="navlinks ms-auto relative flex items-center">
            <button className="md:hidden" onClick={() => toggleOpen(!open)}>
                <Menu />
            </button>

            {(!isMobile || open) && (
                <div className="animate-show flex flex-col md:flex-row bg-card md:bg-transparent rounded-md p-4 md:items-center gap-x-3 md:gap-x-6 gap-y-3 absolute md:static right-8 top-0">
                    <Link
                        className={cn(
                            "text-sm md:font-semibold md:tracking-widest tracking-wider hover:text-primary duration-200 transition-colors",
                            pathname === "/" && "text-primary"
                        )}
                        onClick={() => toggleOpen(false)}
                        href="/"
                    >
                        Home
                    </Link>
                    <Link
                        className={cn(
                            "text-sm md:font-semibold md:tracking-widest tracking-wider hover:text-primary duration-200 transition-colors",
                            pathname === "/about" && "text-primary"
                        )}
                        onClick={() => toggleOpen(false)}
                        href="/about"
                    >
                        About
                    </Link>
                    <Link
                        className={cn(
                            "text-sm md:font-semibold md:tracking-widest tracking-wider hover:text-primary duration-200 transition-colors",
                            pathname.startsWith("/join") && "text-primary"
                        )}
                        onClick={() => toggleOpen(false)}
                        href="/join"
                    >
                        Join
                    </Link>

                    <ToggleThemeButton />
                    {user?.user ? (
                        <Button size="sm" asChild>
                            <Link
                                onClick={() => toggleOpen(false)}
                                href="/profile"
                            >
                                Dashboard
                            </Link>
                        </Button>
                    ) : (
                        <Button
                            asChild
                            className="rounded text-sm ms-2"
                            size="sm"
                        >
                            <Link href="/login">Sign In</Link>
                        </Button>
                    )}
                </div>
            )}
        </div>
    );
};

export default Navlinks;
