import { dateFormatter } from "@/utils/date-formatter";
import { ArrowRight, ChevronRight } from "lucide-react";

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

export default function ApplicationCard({ applicantData }) {
    return (
        <Link
            href={`/admin/applications/${applicantData.id}`}
            className="bg-card border-neutral-200 dark:border-neutral-800 cursor-pointer rounded-md border p-3"
        >
            <div className="dark:text-neutral-200 text-neutral-800 font-semibold mb-3 w-[94%] relative">
                <p>{applicantData.position_name}</p>
                <div className="rounded-full flex items-center justify-center absolute -right-4 top-1">
                    <Tooltip>
                        <TooltipTrigger>
                            <div className="size-2 rounded-full bg-amber-600/80"></div>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Pending</p>
                        </TooltipContent>
                    </Tooltip>
                </div>
            </div>
            <p>{applicantData.fullname}</p>
            <small className="text-xs">
                {dateFormatter(applicantData.created_at)}
            </small>

            <button className="bg-card cursor-pointer flex items-center justify-between border dark:text-neutral-300 pe-1.5 ps-4 py-1.5 text-[13px] w-full mt-4 rounded-full">
                View Details
                <div className="size-5 flex rounded-full justify-center items-center bg-primary">
                    <ArrowRight className="text-white" size={16} />
                </div>
            </button>
        </Link>
    );
}
