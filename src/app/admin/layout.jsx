import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ToggleThemeButton } from "@/components/ui/ToggleThemeButton";
import Image from "next/image";
import { createClient } from "@/utils/supabase/server";
import RightPanel from "./right-panel";

export default async function Layout({ children }) {
    const supabase = await createClient();

    const { data, error } = await supabase.auth.getUser();

    return (
        <SidebarProvider>
            <AppSidebar />
            <div className="w-full">
                <main className="min-h-screen md:pe-5">
                    {/* layout header  */}
                    <div className="flex items-center px-4 py-[15.3px] border-b dark:border-neutral-900">
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
                            <p className="px-3">{data.user.email}</p>
                            <ToggleThemeButton />
                        </div>
                    </div>

                    {/* layout body  */}
                    <div className="p-4 flex gap-2 lg:gap-4">
                        <div className="w-full">{children}</div>
                        <RightPanel />
                    </div>
                </main>

                {/* footer  */}
                <div className="p-4 border-t border-neutral-900">
                    <p className="font-bold uppercase py-1">SABUAG</p>
                </div>
            </div>
        </SidebarProvider>
    );
}
