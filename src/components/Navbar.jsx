"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const pathname = usePathname();

    if (pathname.startsWith("/admin") || pathname === "/login") return null;

    return (
        <div className="flex items-center justify-center border-b border-neutral-800 fixed top-0 left-0 w-full backdrop-blur-xl  bg-background/30 px-3">
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
                            pathname === "/join" && "text-primary"
                        )}
                        href="/join"
                    >
                        Join
                    </Link>
                    <Button asChild className="rounded text-sm ms-2" size="sm">
                        <Link href="/login">Sign In</Link>
                    </Button>
                </div>
            </nav>
        </div>
    );
}
