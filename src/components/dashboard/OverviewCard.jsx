import { CircleCheckBig, Clock, MailWarning, Trophy } from "lucide-react";

export default function OverviewCard({ status, data }) {
    return (
        <div className="rounded-md border flex items-center gap-3 border-transparent shadow-xs dark:border-neutral-800 p-2 bg-white dark:bg-card">
            {status === "Pending" && (
                <div className="bg-slate-100 dark:bg-neutral-200/10 text-orange-500 rounded size-[3rem] items-center justify-center flex p-2">
                    <Clock />
                </div>
            )}
            {status === "Done" && (
                <div className="bg-slate-100 dark:bg-neutral-200/10 text-green-500 rounded size-[3rem] items-center justify-center flex p-2">
                    <CircleCheckBig />
                </div>
            )}
            {status === "Accepted" && (
                <div className="bg-slate-100 dark:bg-neutral-200/10 text-yellow-500 rounded size-[3rem] items-center justify-center flex p-2">
                    <Trophy />
                </div>
            )}
            {status === "Rejected" && (
                <div className="bg-slate-100 dark:bg-neutral-200/10 text-red-400 rounded size-[3rem] items-center justify-center flex p-2">
                    <MailWarning />
                </div>
            )}
            <div className="flex flex-col items-start">
                <h4 className="font-bold text-2xl leading-6 md:leading-8 md:text-3xl">
                    {data.length}
                </h4>
                <span className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400">
                    {status}
                </span>
            </div>
        </div>
    );
}
