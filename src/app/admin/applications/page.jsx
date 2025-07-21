import PrimaryLabel from "@/components/ui/PrimaryLabel";
import { createClient } from "@/utils/supabase/server";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { dateFormatter } from "@/utils/date-formatter";
import { CircleCheck, Loader, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default async function AdminPage() {
    const db = await createClient();

    const { data, error } = await db
        .from("applicants")
        .select()
        .order("created_at", { ascending: false });

    if (error) {
        throw new Error(error.message);
    }

    // const pending = data.filter((item) => item.status === "Pending");
    // const done = data.filter((item) => item.status === "Done");

    return (
        <>
            <div className="mb-8">
                <div className="flex items-center justify-between">
                    <PrimaryLabel>Applications</PrimaryLabel>
                    <p className="text-accent-foreground mb-3 text-xs rounded-full bg-accent px-2.5 py-[2px] border-accent-foreground border">
                        Total : {data.length}
                    </p>
                </div>

                <Table className="mb-4">
                    <TableHeader className="bg-card">
                        <TableRow>
                            <TableHead className="">Name</TableHead>
                            <TableHead>Position</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead className="text-right">Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((data) => (
                            <TableRow
                                key={data.id}
                                className="text-neutral-700 dark:text-neutral-300/80"
                            >
                                <TableCell className="font-medium dark:text-neutral-300">
                                    <Link
                                        className="hover:underline"
                                        href={`/admin/applications/${data.id}`}
                                    >
                                        {data.fullname}
                                    </Link>
                                </TableCell>
                                <TableCell>{data.position_name}</TableCell>
                                <TableCell>
                                    {dateFormatter(data.created_at)}
                                </TableCell>
                                <TableCell className="text-right">
                                    <p
                                        className={cn(
                                            data.status === "Accepted" &&
                                                "bg-emerald-600 text-white",
                                            data.status === "Rejected" &&
                                                "bg-red-500/70 text-white",
                                            data.status === "Done" &&
                                                "border-emerald-600 dark:text-emerald-500 text-emerald-600",
                                            "border rounded-sm text-[13px] inline-flex items-center py-[2px] px-2 gap-1.5"
                                        )}
                                    >
                                        {data.status === "Pending" && (
                                            <Loader size={11} />
                                        )}
                                        {data.status === "Rejected" && (
                                            <X size={12} />
                                        )}
                                        {data.status === "Done" && (
                                            <span className="text-emerald-500">
                                                <CircleCheck size={11} />
                                            </span>
                                        )}
                                        {data.status}
                                    </p>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </>
    );
}
