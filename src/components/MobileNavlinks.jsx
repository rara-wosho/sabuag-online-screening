"use client";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useState } from "react";
import { Button } from "./ui/button";

export default function MobileNavlinks({ currentUser }) {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    const isAdmin =
        currentUser?.role === "superadmin" || currentUser?.role === "admin";

    return (
        <div className="md:hidden flex ms-auto">
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger>
                    <Menu />
                </PopoverTrigger>
                <PopoverContent className="flex flex-col w-50">
                    <Link
                        onClick={() => setOpen(false)}
                        className={cn(
                            "text-sm py-2 text-center",
                            pathname === "/" && "text-primary"
                        )}
                        href="/"
                    >
                        Home
                    </Link>
                    <Link
                        onClick={() => setOpen(false)}
                        className={cn(
                            "text-sm py-2 text-center",
                            pathname === "/about" && "text-primary"
                        )}
                        href="/about"
                    >
                        About
                    </Link>

                    <Link
                        onClick={() => setOpen(false)}
                        className={cn(
                            "text-sm py-2 text-center",
                            pathname.startsWith("/join") && "text-primary"
                        )}
                        href="/join"
                    >
                        Join
                    </Link>
                    <Link
                        onClick={() => setOpen(false)}
                        className={cn(
                            "text-sm py-2 text-center mb-2",
                            pathname.startsWith("/feedbacks") && "text-primary"
                        )}
                        href="/feedbacks"
                    >
                        Feedback
                    </Link>

                    {currentUser === null ? (
                        <Button
                            asChild
                            className="rounded text-sm ms-2"
                            size="sm"
                        >
                            <Link href="/login">Members Login</Link>
                        </Button>
                    ) : (
                        <Button size="sm" asChild>
                            <div>
                                {/* if admin, link to admin dashboard  */}
                                {isAdmin && (
                                    <Link className="w-full" href="/admin">
                                        Dashboard
                                    </Link>
                                )}

                                {/* if not admin, link to profile page  */}
                                {!isAdmin && (
                                    <Link
                                        className="w-full"
                                        href={`/user/${currentUser?.id}`}
                                    >
                                        Profile
                                    </Link>
                                )}
                            </div>
                        </Button>
                    )}
                </PopoverContent>
            </Popover>
        </div>
    );
}
