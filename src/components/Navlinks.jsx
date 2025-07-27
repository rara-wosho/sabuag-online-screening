"use client";

import { cn } from "@/lib/utils";
import { ToggleThemeButton } from "./ui/ToggleThemeButton";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navlinks = ({ user }) => {
    const isMobile = useIsMobile();

    const [hasMounted, setHasMounted] = useState(false);
    const [open, toggleOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setHasMounted(true);
    }, []);

    // prevent the navlinks to flicker; show the navlinks only if the component mounts in client
    if (!hasMounted) return null;

    return (
        <div className="navlinks ms-auto relative flex items-center">
            <button
                className="md:hidden px-2"
                onClick={() => toggleOpen(!open)}
            >
                <Menu />
            </button>

            {(!isMobile || open) && (
                <div className="animate-show md:animate-none flex flex-col md:flex-row bg-card md:bg-transparent rounded-md p-4 md:p-0 md:items-center gap-x-3 md:gap-x-6 gap-y-3 md:gap-y-0 absolute md:static right-8 top-0">
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
                    {/* {userData.id !== null ? (
                        <Button size="sm" asChild>
                            <Link
                                onClick={() => toggleOpen(false)}
                                href={
                                    userData?.role === "superadmin" ||
                                    userData?.role === "admin"
                                        ? "/admin"
                                        : `/user/${userData?.id}`
                                }
                            >
                                {userData?.role === "superadmin" ||
                                userData?.role === "admin"
                                    ? "Dashboard"
                                    : "Profile"}
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
                        )} */}

                    {user.id !== null && (
                        <Button
                            asChild
                            className="rounded text-sm ms-2"
                            size="sm"
                        >
                            <Link href={`/user/${user.id}`}>Profile</Link>
                        </Button>
                    )}
                    {user.id === null && (
                        <Button
                            asChild
                            className="rounded text-sm ms-2"
                            size="sm"
                        >
                            <Link href={`/login`}>Sign In</Link>
                        </Button>
                    )}
                </div>
            )}
        </div>
    );
};

export default Navlinks;
