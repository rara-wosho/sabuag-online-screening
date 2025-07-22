import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import RightPanel from "./right-panel";
import AdminLayoutHeader from "@/components/AdminLayoutHeader";

export default async function Layout({ children }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <div className="w-full ">
                <main className="min-h-screen relative">
                    {/* layout header  */}
                    <AdminLayoutHeader />

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
