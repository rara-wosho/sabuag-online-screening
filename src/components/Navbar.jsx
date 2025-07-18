"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

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

                <div className="navlinks ms-auto flex items-center gap-2 md:gap-4">
                    <Link
                        className="text-sm hover:text-accent-foreground duration-200 transition-colors"
                        href="/"
                    >
                        Home
                    </Link>
                    <Link
                        className="text-sm hover:text-accent-foreground duration-200 transition-colors"
                        href="/about"
                    >
                        About
                    </Link>
                    <Link
                        className="text-sm hover:text-accent-foreground duration-200 transition-colors"
                        href="/feedback"
                    >
                        Feedback
                    </Link>
                    <Button asChild className="rounded text-sm ms-2" size="sm">
                        <Link href="/login">Sign In</Link>
                    </Button>
                </div>
            </nav>
        </div>
    );
}
