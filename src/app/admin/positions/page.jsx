import PositionTab from "@/components/ui/PositionTab";
import PrimaryLabel from "@/components/ui/PrimaryLabel";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

async function getOpenPositions() {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from("positions")
        .select()
        .eq("is_open", true)
        .order("title", { ascending: true });

    return data;
}

async function getOtherPositions() {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from("positions")
        .select()
        .eq("is_open", false)
        .order("title", { ascending: true });

    return data;
}

export default async function PositionsPage() {
    const openPositions = getOpenPositions();
    const otherPositions = getOtherPositions();

    const [open, other] = await Promise.all([openPositions, otherPositions]);

    // console.log("other : ", other);

    // if (getOtherPositions.error || getOpenPositions.error) {
    //     return <p>Something went wrong while we fetch the data.</p>;
    // }

    return (
        <div>
            <div className="flex gap-3 items-center">
                <PrimaryLabel>Available Positions</PrimaryLabel>

                <div className="relative mb-3">
                    <div className="size-2 bg-emerald-600 rounded-full"></div>
                    <div className="size-2 bg-emerald-600 rounded-full animate-ping absolute top-0"></div>
                </div>
            </div>

            {/* {getOpenPositions.data.length === 0 && (
                <p>No available positions</p>
            )} */}

            <div className="grid grid-cols-1 md:grid-cols-4 mb-6 gap-3 pb-8">
                {open.map((pos) => (
                    <PositionTab
                        key={pos.id}
                        id={pos.id}
                        title={pos.title}
                        description={pos.description}
                        is_open={pos.is_open}
                    />
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

            {/* {getOtherPositions.data.length === 0 && <p>No positions found.</p>} */}

            <div className="grid grid-cols-1 md:grid-cols-4 mb-6 gap-3">
                {other.map((pos) => (
                    <PositionTab
                        key={pos.id}
                        id={pos.id}
                        title={pos.title}
                        description={pos.description}
                        is_open={pos.is_open}
                    />
                ))}
            </div>
        </div>
    );
}
