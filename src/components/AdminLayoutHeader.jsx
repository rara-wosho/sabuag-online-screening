import React from "react";
import { SidebarTrigger } from "./ui/sidebar";
import Image from "next/image";
import { ToggleThemeButton } from "./ui/ToggleThemeButton";
import { createClient } from "@/utils/supabase/server";
import { Bell } from "lucide-react";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function AdminLayoutHeader() {
    const supabase = await createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    const { data, error } = await supabase
        .from("users")
        .select("id, firstname, lastname")
        .single()
        .eq("id", user.id);

    return (
        <div className="flex items-center px-3 py-[15.3px] border-b dark:border-neutral-900 sticky top-0 left-0 bg-background/50 backdrop-blur-2xl w-full md:pe-5 z-50">
            <SidebarTrigger />
            <div className="md:flex items-center  gap-2 border-s ps-3 ms-2 hidden">
                <p className="font-medium">
                    Welcome back, {data?.firstname} 👋
                </p>
            </div>
            <div className="ms-auto flex items-center gap-3 md:pe-2">
                <div className="text-neutral-700 dark:text-neutral-400 flex items-center justify-center">
                    <Bell size={20} className="hover:text-accent-foreground" />
                </div>
                <div className="text-neutral-700 dark:text-neutral-400 flex items-center justify-center">
                    <ToggleThemeButton className="hover:text-accent-foreground" />
                </div>
                <Link
                    href={`/user/${data.id}`}
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
                        {data?.firstname} {data.lastname}
                    </p>
                </Link>
            </div>
        </div>
    );
}
