import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function PositionTab({ data }) {
    return (
        <Link
            href={`/admin/positions/${data.id}`}
            className={cn(
                "border rounded-md p-3 dark:bg-neutral-900/30 group cursor-pointer",
                data.isOpen && "border-emerald-700 shadow"
            )}
        >
            <div className="flex items-center mb-1">
                <h1 className="font font-semibold">{data.title}</h1>
                {data.isOpen && (
                    <div className="relative ms-3">
                        <div className="size-2 bg-emerald-500 dark:bg-emerald-600 rounded-full"></div>
                        <div className="size-2 bg-emerald-500 dark:bg-emerald-600 rounded-full animate-ping absolute top-0"></div>
                    </div>
                )}
                <div className="ms-auto scale-0 group-hover:scale-100 duration-200 transition-transform">
                    <ChevronRight size={18} />
                </div>
            </div>
            <p className="text-[14px] text-neutral-500 dark:text-neutral-400">
                {!data.description ? (
                    <span className="italic">No description provided.</span>
                ) : (
                    data.description
                )}
            </p>
        </Link>
    );
}
