"use client";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { dateFormatter } from "@/utils/date-formatter";
import { ChevronsUpDown, CircleCheck, Loader, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ApplicationsTable({ data }) {
    const [category, setCategory] = useState("All");
    const [filteredData, setFilteredData] = useState(data);

    const handleCategoryChange = (categ) => {
        if (categ !== category) {
            setCategory(categ);
        }
    };

    useEffect(() => {
        if (category === "All") {
            setFilteredData(data);
        } else {
            const filtered = data.filter((d) => d.status === category);
            setFilteredData(filtered);
        }
    }, [category, data]);

    return (
        <Table className="mb-4">
            <TableHeader className="bg-card">
                <TableRow>
                    <TableHead className="">Name</TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="flex items-center justify-end">
                        <Select onValueChange={handleCategoryChange}>
                            <SelectTrigger className="bg-transparent dark:bg-transparent dark:hover:bg-transparent hover:bg-transparent border-0 p-0 pe-1 cursor-pointer hover:text-accent-foreground">
                                <SelectValue placeholder="Status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="All">All</SelectItem>
                                <SelectItem value="Pending">Pending</SelectItem>
                                <SelectItem value="Accepted">
                                    Accepted
                                </SelectItem>
                                <SelectItem value="Rejected">
                                    Rejected
                                </SelectItem>
                                <SelectItem value="Done">Done</SelectItem>
                            </SelectContent>
                        </Select>
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {filteredData.map((data) => (
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
                        <TableCell>{dateFormatter(data.created_at)}</TableCell>
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
                                {data.status === "Rejected" && <X size={12} />}
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
    );
}
