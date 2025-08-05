"use client";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { dateFormatter } from "@/utils/date-formatter";
import { CircleCheck, Loader, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import PrimaryLabel from "./ui/PrimaryLabel";

export default function ApplicationsTable({ data, search }) {
    const [category, setCategory] = useState("All");
    const [positionCategory, setPositionCategory] = useState("All");
    const [filteredData, setFilteredData] = useState(data);
    const [filteredPositions, setFilteredtPositions] = useState([]);

    const handleCategoryChange = (categ) => {
        if (categ !== category) {
            setCategory(categ);
        }
    };

    const handlePositionChange = (positionCateg) => {
        if (positionCateg !== positionCategory) {
            setPositionCategory(positionCateg);
        }
    };

    useEffect(() => {
        const uniquePositions = Array.from(
            new Set(data.map((d) => d.position_name))
        );
        setFilteredtPositions(uniquePositions);
    }, [data]);

    useEffect(() => {
        let filtered = data;

        if (category !== "All") {
            filtered = filtered.filter((d) => d.status === category);
        }

        if (positionCategory !== "All") {
            filtered = filtered.filter(
                (d) => d.position_name === positionCategory
            );
        }

        setFilteredData(filtered);
    }, [category, positionCategory, data]);

    return (
        <>
            {!search && (
                <div className="flex items-center">
                    <PrimaryLabel>Applications</PrimaryLabel>{" "}
                    <p className="bg-accent text-accent-foreground text-sm text-center ms-2 mb-4 px-2 rounded">
                        {filteredData.length}
                    </p>
                </div>
            )}

            <Table className="mb-4 bg-white dark:bg-transparent">
                {/* <TableCaption>A list of recent applications.</TableCaption> */}
                <TableHeader className="bg-card">
                    <TableRow>
                        <TableHead className="">Name</TableHead>
                        <TableHead>
                            <Select onValueChange={handlePositionChange}>
                                <SelectTrigger className="bg-transparent dark:bg-transparent dark:hover:bg-transparent hover:bg-transparent border-0 p-0 pe-1 cursor-pointer  active:ring-0 focus:ring-0 dark:active:ring-0 dark:focus:ring-0">
                                    <SelectValue placeholder="All Positions" />
                                </SelectTrigger>

                                <SelectContent>
                                    <SelectItem value="All">
                                        All Positions
                                    </SelectItem>
                                    {filteredPositions.map((pos, index) => (
                                        <SelectItem value={pos} key={index}>
                                            {pos}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="flex items-center justify-end">
                            <Select onValueChange={handleCategoryChange}>
                                <SelectTrigger className="bg-transparent dark:bg-transparent dark:hover:bg-transparent hover:bg-transparent border-0 p-0 pe-1 cursor-pointer  active:ring-0 focus:ring-0 dark:active:ring-0 dark:focus:ring-0">
                                    <SelectValue placeholder="Status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="All">All</SelectItem>
                                    <SelectItem value="Pending">
                                        Pending
                                    </SelectItem>
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
                            className="text-neutral-700 dark:text-neutral-300/80 cursor-pointer"
                        >
                            <TableCell className="font-medium dark:text-neutral-300">
                                <Link
                                    className="hover:underline"
                                    href={`/admin/applications/${data.id}`}
                                >
                                    {data.fullname}
                                </Link>
                            </TableCell>
                            <TableCell className="dark:text-neutral-400/90">
                                {data.position_name}
                            </TableCell>
                            <TableCell className="dark:text-neutral-400/90">
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
        </>
    );
}
