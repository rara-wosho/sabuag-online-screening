"use client";

import { useMemo, useState } from "react";

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
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import PrimaryLabel from "./ui/PrimaryLabel";
import { dateFormatter } from "@/utils/date-formatter";
import { Button } from "./ui/button";
import Link from "next/link";
import MemberTableAction from "./MemberTableAction";
import { Checkbox } from "./ui/checkbox";
import SubmitButton from "./ui/SubmitButton";
import Form from "next/form";
import ToggleAdditionalTableCol from "./ToggleAdditionalTableCol";
import MarkMembersAction from "./MarkMembersAction";

export default function MembersTable({ members, search }) {
    const [selectedIds, setSelectedIds] = useState([]);
    const [additionalCols, setAdditionCols] = useState([]);

    const nonSuperAdmins = useMemo(
        () => members.filter((m) => m.role !== "superadmin"),
        [members]
    );

    const handleSelect = (id) => {
        if (selectedIds.includes(id)) {
            setSelectedIds((prev) => prev.filter((p) => p !== id));
        } else {
            setSelectedIds((prev) => [...prev, id]);
        }
    };
    const handleSelectAll = () => {
        if (selectedIds.length === nonSuperAdmins.length) {
            setSelectedIds([]);
        } else {
            setSelectedIds(nonSuperAdmins.map((m) => m.id));
        }
    };

    return (
        <div className="relative">
            {selectedIds.length > 0 && (
                <MarkMembersAction
                    selectedIds={selectedIds}
                    setSelectedIds={setSelectedIds}
                />
            )}

            {!search && (
                <div className="flex items-center">
                    <PrimaryLabel>Members</PrimaryLabel>
                    <p className="bg-accent text-accent-foreground text-sm text-center ms-2 mb-4 px-2 rounded">
                        {members.length}
                    </p>

                    <Button asChild size="sm" className="ms-auto mb-4">
                        <Link href="/admin/members/create-user">
                            New Member
                        </Link>
                    </Button>
                </div>
            )}

            <ToggleAdditionalTableCol
                additionalCols={additionalCols}
                setAdditionCols={setAdditionCols}
            />
            <Table>
                <TableCaption className="md:hidden text-left">
                    Swipe left to view other details.
                </TableCaption>
                <TableHeader className="bg-white dark:bg-card">
                    <TableRow>
                        <TableHead className="flex items-center gap-3">
                            <Checkbox
                                checked={
                                    selectedIds.length === nonSuperAdmins.length
                                }
                                onCheckedChange={handleSelectAll}
                            />
                            Name
                        </TableHead>

                        <TableHead>Position</TableHead>
                        <TableHead>Age</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Address</TableHead>
                        {additionalCols.includes("course") && (
                            <TableHead>Course</TableHead>
                        )}
                        {additionalCols.includes("year") && (
                            <TableHead>Year</TableHead>
                        )}
                        {additionalCols.includes("joined") && (
                            <TableHead>Joined</TableHead>
                        )}
                        <TableHead className="text-right">Status</TableHead>
                        <TableHead className="text-right"> </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {members.map((user) => (
                        <TableRow key={user.id}>
                            <TableCell className="font-medium">
                                <Button
                                    asChild
                                    variant="link"
                                    className="p-0 text-neutral-800 dark:text-neutral-300 h-7"
                                >
                                    <div className="flex items-center gap-3">
                                        <Checkbox
                                            disabled={
                                                user.role === "superadmin"
                                            }
                                            checked={selectedIds.includes(
                                                user.id
                                            )}
                                            onCheckedChange={() =>
                                                handleSelect(user.id)
                                            }
                                        />
                                        <Link href="#">
                                            {user.lastname}, {user.firstname}
                                            {user.role === "superadmin" &&
                                                " 👑"}
                                        </Link>
                                    </div>
                                </Button>
                            </TableCell>

                            <TableCell className="text-neutral-700 dark:text-neutral-300/90">
                                {user?.position ? (
                                    user?.position
                                ) : (
                                    <p className="text-neutral-400  dark:text-neutral-700">
                                        -
                                    </p>
                                )}
                            </TableCell>
                            <TableCell className="text-neutral-700 dark:text-neutral-300/90">
                                {user?.age ? (
                                    user?.age
                                ) : (
                                    <p className="text-neutral-400  dark:text-neutral-700">
                                        -
                                    </p>
                                )}
                            </TableCell>
                            <TableCell className="text-neutral-700 dark:text-neutral-300/90">
                                {user.email}
                            </TableCell>

                            <TableCell className="text-neutral-700 dark:text-neutral-300/90">
                                {user?.address ? (
                                    user?.address
                                ) : (
                                    <p className="text-neutral-400  dark:text-neutral-700">
                                        -
                                    </p>
                                )}
                            </TableCell>
                            {additionalCols.includes("course") && (
                                <TableCell className="text-neutral-700 dark:text-neutral-300/90">
                                    {user?.course ? (
                                        user?.course
                                    ) : (
                                        <p className="text-neutral-400  dark:text-neutral-700">
                                            -
                                        </p>
                                    )}
                                </TableCell>
                            )}
                            {additionalCols.includes("year") && (
                                <TableCell className="text-neutral-700 dark:text-neutral-300/90 text-xs">
                                    {user?.year_section ? (
                                        user?.year_section
                                    ) : (
                                        <p className="text-neutral-400  dark:text-neutral-700">
                                            -
                                        </p>
                                    )}
                                </TableCell>
                            )}

                            {additionalCols.includes("joined") && (
                                <TableCell className="text-neutral-700 dark:text-neutral-300/90 text-xs">
                                    {dateFormatter(user.created_at)}
                                </TableCell>
                            )}
                            <TableCell className="text-right">
                                <div className="flex items-center gap-2 justify-end">
                                    {user?.status === "active" ? (
                                        <>
                                            Active
                                            <div className="relative rounded-full size-2 bg-emerald-500">
                                                <div className="absolute top-0 left-0 rounded-full size-2 bg-emerald-500 animate-ping"></div>
                                            </div>
                                        </>
                                    ) : (
                                        <p className="text-xs text-red-700 border border-red-700 rounded-full px-2 dark:border-red-400/50 dark:text-red-400/70">
                                            Inactive
                                        </p>
                                    )}
                                </div>
                            </TableCell>
                            <TableCell className="text-right">
                                <MemberTableAction user={user} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
