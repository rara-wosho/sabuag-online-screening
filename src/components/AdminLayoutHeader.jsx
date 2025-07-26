"use client";

import { SidebarTrigger } from "./ui/sidebar";
import Image from "next/image";
import { ToggleThemeButton } from "./ui/ToggleThemeButton";
import { createClient } from "@/utils/supabase/client";
import { Bell } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";

export default function AdminLayoutHeader({ currentUserId }) {
    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserData = async () => {
            const supabase = createClient();

            try {
                const { data, error } = await supabase
                    .from("users")
                    .select("id, firstname, lastname")
                    .single()
                    .eq("id", currentUserId);

                if (error) {
                    throw new Error(
                        "Please make sure that you have a stable internet connection."
                    );
                }

                setUserData(data);
            } catch (err) {
                console.log(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    return (
        <div className="flex items-center px-3 py-[15.3px] border-b dark:border-neutral-900 sticky top-0 left-0 bg-background/50 backdrop-blur-2xl w-full md:pe-5 z-50">
            <SidebarTrigger />

            {loading && (
                <div className="flex items-center justify-between w-full ms-2">
                    <Skeleton className="h-5 rounded w-32" />
                    <div className="ms-auto flex gap-2">
                        <Skeleton className="h-5 rounded w-5" />
                        <Skeleton className="h-5 rounded w-5" />
                        <Skeleton className="h-5 rounded w-5" />
                        <Skeleton className="h-5 rounded w-16" />
                    </div>
                </div>
            )}

            {!loading && (
                <>
                    <div className="md:flex items-center  gap-2 border-s ps-3 ms-2 hidden">
                        <p className="font-medium">
                            Welcome back, {userData?.firstname} 👋
                        </p>
                    </div>
                    <div className="ms-auto flex items-center gap-3 md:pe-2">
                        <div className="text-neutral-700 dark:text-neutral-400 flex items-center justify-center">
                            <Bell
                                size={20}
                                className="hover:text-accent-foreground"
                            />
                        </div>
                        <div className="text-neutral-700 dark:text-neutral-400 flex items-center justify-center">
                            <ToggleThemeButton className="hover:text-accent-foreground" />
                        </div>
                        <Link
                            href={`/user/${userData.id}`}
                            className="flex items-center justify-center"
                        >
                            <Image
                                src="/default-pic.jpg"
                                width={25}
                                height={25}
                                alt="avatar"
                                className="rounded-full"
                            />
                            <p className="text-xs hidden md:flex px-2">
                                {userData?.firstname} {userData.lastname}
                            </p>
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
}
