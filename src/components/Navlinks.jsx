"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./ui/button";
import { ThemeToggler } from "./ui/theme-toggler";
import { usePathname } from "next/navigation";

const Navlinks = ({ currentUser }) => {
    const pathname = usePathname();

    const isAdmin =
        currentUser?.role === "superadmin" || currentUser?.role === "admin";
    return (
        <div className="navlinks ms-auto relative hidden md:flex items-center">
            <div className="animate-show md:animate-none flex flex-col md:flex-row bg-card md:bg-transparent rounded-md p-4 md:p-0 md:items-center gap-x-3 md:gap-x-6 gap-y-3 md:gap-y-0 absolute md:static right-8 top-0">
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
                <Link
                    className={cn(
                        "text-sm md:font-semibold md:tracking-widest tracking-wider hover:text-primary duration-200 transition-colors",
                        pathname.startsWith("/feedbacks") && "text-primary"
                    )}
                    href="/feedbacks"
                >
                    Feedback
                </Link>

                <ThemeToggler />
                {currentUser === null ? (
                    <Button asChild className="rounded text-sm ms-2" size="sm">
                        <Link href="/login">Members Login</Link>
                    </Button>
                ) : (
                    <Button size="sm" asChild>
                        <div>
                            {/* if admin, link to admin dashboard  */}
                            {isAdmin && <Link href="/admin">Dashboard</Link>}

                            {/* if not admin, link to profile page  */}
                            {!isAdmin && (
                                <Link href={`/user/${currentUser?.id}`}>
                                    Profile
                                </Link>
                            )}
                        </div>
                    </Button>
                )}
            </div>
        </div>
    );
};

export default Navlinks;
