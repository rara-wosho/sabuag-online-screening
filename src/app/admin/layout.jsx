import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function Layout({ children }) {
    return (
        <SidebarProvider className="max-h-[80vh]">
            <AppSidebar />
            <main className="p-4">
                <SidebarTrigger />
                {children}
            </main>
        </SidebarProvider>
    );
}
