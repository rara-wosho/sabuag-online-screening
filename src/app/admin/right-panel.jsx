import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

export default async function RightPanel() {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from("positions")
        .select()
        .eq("is_open", true);

    return (
        <div className="w-[220px] border-s dark:border-neutral-900 lg:px-4 hidden xl:block">
            <h5 className="text-[12px] font-semibold">Available positions</h5>

            {data && (
                <ul className="mt-2 dark:text-neutral-400 text-neutral-700">
                    {data.map((pos) => (
                        <Link
                            key={pos.id}
                            href={`/admin/applications/${pos.id}`}
                        >
                            <li className="text-[13px] tracking-wide duration-200 transition-colors hover:text-accent-foreground py-2 ">
                                {pos.title}
                            </li>
                        </Link>
                    ))}
                </ul>
            )}
        </div>
    );
}
