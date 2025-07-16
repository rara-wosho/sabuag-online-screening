import PositionTab from "@/components/ui/PositionTab";
import PrimaryLabel from "@/components/ui/PrimaryLabel";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

export default async function PositionsPage() {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from("positions")
        .select()
        .order("title", { ascending: true });

    const openPositions = data.filter((da) => da.is_open);

    return (
        <div>
            <div className="flex gap-3 items-center">
                <PrimaryLabel>Available Positions</PrimaryLabel>

                <div className="relative mb-3">
                    <div className="size-2 bg-emerald-600 rounded-full"></div>
                    <div className="size-2 bg-emerald-600 rounded-full animate-ping absolute top-0"></div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 mb-6 gap-3 pb-8">
                {openPositions.map((pos) => (
                    <PositionTab key={pos.id} data={pos} />
                ))}
            </div>
            <div className="flex items-center">
                <PrimaryLabel>All Positions</PrimaryLabel>

                <Link
                    href="/admin/positions/new"
                    className="rounded ms-auto mb-4 px-4 py-1 bg-emerald-600 font-semibold text-white"
                >
                    Create new position
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 mb-6 gap-3">
                {data.map((pos) => (
                    <PositionTab key={pos.id} data={pos} isOpen={pos.is_open} />
                ))}
            </div>
        </div>
    );
}
