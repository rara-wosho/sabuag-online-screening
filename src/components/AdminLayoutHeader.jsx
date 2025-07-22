import React from "react";
import { SidebarTrigger } from "./ui/sidebar";
import Image from "next/image";
import { ToggleThemeButton } from "./ui/ToggleThemeButton";
import { createClient } from "@/utils/supabase/server";

export default async function AdminLayoutHeader() {
    const supabase = await createClient();

    const { data } = await supabase.auth.getUser();

    return (
        <div className="flex items-center px-3 py-[15.3px] border-b dark:border-neutral-900 sticky top-0 left-0 bg-background/50 backdrop-blur-2xl w-full md:pe-5 z-50">
            <SidebarTrigger />
            <div className="flex items-center  gap-2 border-s ps-3 ms-2">
                <Image
                    alt="sabuag logo"
                    src="/official-sabuag.png"
                    width={22}
                    height={22}
                />
                <p className="font-bold uppercase">sabuag</p>
            </div>
            <div className="ms-auto flex items-center">
                <p className="hidden md:flex px-3 text-sm">{data.user.email}</p>
                <ToggleThemeButton />
            </div>
        </div>
    );
}
