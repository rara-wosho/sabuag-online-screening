"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { ToggleThemeButton } from "./ui/ToggleThemeButton";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import { CircleUserRound } from "lucide-react";

export default function Navbar() {
    const pathname = usePathname();
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    if (pathname.startsWith("/admin") || pathname === "/login") return null;

    useEffect(() => {
        const fetchUserSession = async () => {
            const supabase = createClient();

            const { data } = await supabase.auth.getUser();

            if (data) {
                setUser(data);
                console.log("user data", data);
            }

            setLoading(false);
        };

        fetchUserSession();
    }, []);

    return (
        <div className="flex items-center justify-center border-b border-b-neutral-300 dark:border-neutral-800 fixed top-0 left-0 w-full backdrop-blur-xl  bg-background/30 px-3 z-50">
            <nav className="py-3 w-full max-w-[1200px] flex items-center">
                <Link
                    href="/"
                    className="flex items-center gap-2 font-semibold uppercase"
                >
                    <Image
                        src="/official-sabuag.png"
                        width={25}
                        height={25}
                        alt="sabuag logo"
                    />
                    <span className="hidden md:flex">Sabuag</span>
                </Link>

                <div className="navlinks ms-auto flex items-center gap-3 md:gap-6">
                    <Link
                        className={cn(
                            "text-sm md:font-semibold md:tracking-widest tracking-wider hover:text-primary duration-200 transition-colors",
                            pathname === "/" && "text-primary"
                        )}
                        href="/"
                    >
                        Home
                    </Link>
                    <Link
                        className={cn(
                            "text-sm md:font-semibold md:tracking-widest tracking-wider hover:text-primary duration-200 transition-colors",
                            pathname === "/about" && "text-primary"
                        )}
                        href="/about"
                    >
                        About
                    </Link>
                    <Link
                        className={cn(
                            "text-sm md:font-semibold md:tracking-widest tracking-wider hover:text-primary duration-200 transition-colors",
                            pathname.startsWith("/join") && "text-primary"
                        )}
                        href="/join"
                    >
                        Join
                    </Link>

                    <ToggleThemeButton />
                    {loading ? (
                        <div className="size-4 border-y-2 border-neutral-900 dark:border-neutral-100 animate-spin rounded-full"></div>
                    ) : user?.user ? (
                        <Button size="sm" asChild>
                            <Link href="/profile">Dashboard</Link>
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
            </nav>
        </div>
    );
}
