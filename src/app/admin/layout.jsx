import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ToggleThemeButton } from "@/components/ui/ToggleThemeButton";
import Image from "next/image";

export default function Layout({ children }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <div className="w-full">
                <main className="min-h-screen md:pe-5">
                    <div className="flex items-center px-4 py-[17px] border-b dark:border-neutral-900">
                        <div className="flex items-center md:hidden gap-2 border-e pe-4 me-2">
                            <Image
                                alt="sabuag logo"
                                src="/official-sabuag.png"
                                width={22}
                                height={22}
                            />
                            <p className="font-bold uppercase">sabuag</p>
                        </div>
                        <SidebarTrigger />
                        <div className="ms-auto">
                            <ToggleThemeButton />
                        </div>
                    </div>
                    <div className="p-4">{children}</div>
                </main>
                <div className="p-4 border-t border-neutral-900">
                    <p className="font-bold uppercase py-1">SABUAG</p>
                </div>
            </div>
        </SidebarProvider>
    );
}
