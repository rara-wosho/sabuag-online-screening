import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import RightPanel from "./right-panel";
import AdminLayoutHeader from "@/components/AdminLayoutHeader";
import { createClient } from "@/utils/supabase/server";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default async function Layout({ children }) {
    const db = await createClient();

    const {
        data: { user },
        error,
    } = await db.auth.getUser();

    if (error) {
        notFound();
    }

    const fallbackUi = (
        <div className="flex items-center justify-between w-full ms-2">
            <Skeleton className="h-5 rounded w-32" />
            <div className="ms-auto flex gap-2">
                <Skeleton className="h-5 rounded w-5" />
                <Skeleton className="h-5 rounded w-5" />
                <Skeleton className="h-5 rounded w-5" />
                <Skeleton className="h-5 rounded w-16" />
            </div>
        </div>
    );
    return (
        <SidebarProvider>
            <AppSidebar />
            <div className="w-full ">
                <main className="min-h-screen relative">
                    <Suspense fallback={fallbackUi}>
                        <AdminLayoutHeader currentUserId={user.id} />
                    </Suspense>

                    {/* layout body  */}
                    <div className="py-3 flex">
                        <div className="w-full px-3 md:px-4">{children}</div>
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
