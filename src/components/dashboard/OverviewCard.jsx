import { CircleCheckBig, Clock, MailWarning, Trophy } from "lucide-react";

export default function OverviewCard({ status, data }) {
    return (
        <div className="rounded-md border flex flex-col gap-3 items-start dark:border-neutral-800 p-2 bg-white dark:bg-card">
            {status === "Pending" && (
                <div className="rounded bg-amber-600 inline-flex p-2">
                    <Clock />
                </div>
            )}
            {status === "Done" && (
                <div className="rounded bg-amber-600 inline-flex p-2">
                    <CircleCheckBig />
                </div>
            )}
            {status === "Accepted" && (
                <div className="rounded bg-amber-600 inline-flex p-2">
                    <Trophy />
                </div>
            )}
            {status === "Rejected" && (
                <div className="rounded bg-amber-600 inline-flex p-2">
                    <MailWarning />
                </div>
            )}
            <div className="flex gap-2 items-end">
                <h4 className="font-bold text-4xl">{data.length}</h4>
                <span className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400">
                    {status}
                </span>
            </div>
        </div>
    );
}
