"use client";

import React from "react";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import PrimaryLabel from "./ui/PrimaryLabel";
import { dateFormatter } from "@/utils/date-formatter";
import { Button } from "./ui/button";
import Link from "next/link";

export default function MembersTable({ members, search }) {
    return (
        <>
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
            <Table>
                <TableCaption className="md:hidden text-left">
                    Swipe left to view other details.
                </TableCaption>
                <TableHeader className="bg-white dark:bg-card">
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Position</TableHead>
                        <TableHead>Age</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Address</TableHead>
                        <TableHead>Course</TableHead>
                        <TableHead>Joined</TableHead>
                        <TableHead className="text-right">Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {members.map((user) => (
                        <TableRow key={user.id}>
                            <TableCell className="font-medium">
                                {user.lastname}, {user.firstname}
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
                                {dateFormatter(user.created_at)}
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
                            <TableCell className="text-neutral-700 dark:text-neutral-300/90">
                                {user?.course ? (
                                    user?.course
                                ) : (
                                    <p className="text-neutral-400  dark:text-neutral-700">
                                        -
                                    </p>
                                )}
                            </TableCell>
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
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
}
