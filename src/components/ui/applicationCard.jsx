import { dateFormatter } from "@/utils/date-formatter";
import { ArrowRight } from "lucide-react";

import Link from "next/link";

export default function ApplicationCard({ applicantData }) {
    return (
        <Link
            href={`/admin/applications/${applicantData.id}`}
            className="bg-sidebar dark:bg-card border-neutral-100 shadow dark:border-neutral-800 cursor-pointer rounded-md border p-3"
        >
            <div className="dark:text-neutral-200 text-neutral-800 font-semibold mb-3 w-[94%] relative">
                <p className="text-sm dark:text-neutral-300 md:text-lg">
                    {applicantData.fullname}
                </p>
            </div>
            <p className="text-sm md:text-[16px]">
                {applicantData.position_name}
            </p>
            <small className="text-xs dark:text-neutral-400 text-neutral-500">
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
