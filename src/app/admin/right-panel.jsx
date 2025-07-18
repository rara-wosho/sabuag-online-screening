import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import WasThisHelpful from "@/components/ui/wasthishelpful";
import { createClient } from "@/utils/supabase/server";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default async function RightPanel() {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from("positions")
        .select()
        .eq("is_open", true);

    return (
        <div className="w-[220px] border-s dark:border-neutral-900 lg:px-4 hidden xl:block">
            <h5 className="text-[12px] font-semibold mb-3">Shortcuts</h5>

            {data && (
                <SidebarMenu className="dark:text-neutral-400 text-neutral-700">
                    <SidebarMenuItem className="">
                        <h5 className="text-[13px] font-semibold mb-1 flex items-center">
                            {/* <ChevronRight size={16} /> */}
                            New Position
                        </h5>
                        <SidebarMenuSub className="border-0 ps-0">
                            <SidebarMenuSubItem>
                                <Link href={`/admin/positions/new`}>
                                    <p className="text-[12px] tracking-wide duration-200 transition-colors hover:text-accent-foreground py-1">
                                        Create
                                    </p>
                                </Link>
                            </SidebarMenuSubItem>
                        </SidebarMenuSub>
                    </SidebarMenuItem>
                    <SidebarMenuItem className="mb-3">
                        <h5 className="text-[13px] font-semibold mb-1">
                            Available Positions
                        </h5>
                        {data.map((pos) => (
                            <SidebarMenuSub
                                key={pos.id}
                                className="border-0 ps-0"
                            >
                                <SidebarMenuSubItem>
                                    <Link href={`/admin/positions/${pos.id}`}>
                                        <p className="text-[12px] tracking-wide duration-200 transition-colors hover:text-accent-foreground py-1">
                                            {pos.title}
                                        </p>
                                    </Link>
                                </SidebarMenuSubItem>
                            </SidebarMenuSub>
                        ))}
                    </SidebarMenuItem>
                </SidebarMenu>
            )}

            <WasThisHelpful />
        </div>
    );
}
