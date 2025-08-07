import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import RightPanel from "./right-panel";
import AdminLayoutHeader from "@/components/AdminLayoutHeader";
import { createClient } from "@/utils/supabase/server";
import { notFound } from "next/navigation";

export default async function Layout({ children }) {
    const supabase = await createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    let currentUser = null;

    if (user?.id) {
        const { data, error } = await supabase
            .from("users")
            .select("id, firstname, lastname, role")
            .eq("id", user.id)
            .single();

        if (!error) currentUser = data;

        if (currentUser?.role === "user") {
            notFound();
        }
    }

    return (
        <SidebarProvider>
            <AppSidebar />
            <div className="w-full ">
                <main className="min-h-screen relative">
                    <AdminLayoutHeader currentUser={currentUser} />

                    {/* layout body  */}
                    <div className="py-3 flex">
                        <div className="w-full px-3 md:px-4">{children}</div>
                        <RightPanel />
                    </div>
                </main>

                {/* footer  */}
                <div className="p-4 border-t dark:border-neutral-900">
                    <p className="font-bold uppercase py-1">SABUAG</p>
                    <div className="flex items-center justify-between text-neutral-600 dark:text-neutral-400">
                        <p className="text-xs">Developed by Israel De Vera</p>
                        <p className="text-xs">All rights reserved.</p>
                    </div>
                </div>
            </div>
        </SidebarProvider>
    );
}
