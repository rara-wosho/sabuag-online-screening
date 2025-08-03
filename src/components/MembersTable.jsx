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

import PrimaryLabel from "./ui/PrimaryLabel";
import { dateFormatter } from "@/utils/date-formatter";
import { Button } from "./ui/button";
import Link from "next/link";
import { Ellipsis } from "lucide-react";
import FormLabel from "./FormLabel";

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
                                    <Link href="#">
                                        {user.lastname}, {user.firstname}
                                        {user.role === "superadmin" && " 👑"}
                                    </Link>
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
                            <TableCell className="text-neutral-700 dark:text-neutral-300/90">
                                {user?.course ? (
                                    user?.course
                                ) : (
                                    <p className="text-neutral-400  dark:text-neutral-700">
                                        -
                                    </p>
                                )}
                            </TableCell>
                            <TableCell className="text-neutral-700 dark:text-neutral-300/90 text-xs">
                                {dateFormatter(user.created_at)}
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
                            <TableCell className="text-right">
                                <Popover>
                                    <PopoverTrigger>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="h-7"
                                        >
                                            <Ellipsis />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="flex flex-col w-fit">
                                        <Select
                                            disabled={
                                                user.role === "superadmin"
                                            }
                                        >
                                            <FormLabel label="Change Role" />
                                            <SelectTrigger className="w-[180px] border dark:border-neutral-600 shadow-none bg-transparent">
                                                <SelectValue
                                                    placeholder={user.role}
                                                />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="user">
                                                    User
                                                </SelectItem>
                                                <SelectItem value="admin">
                                                    Admin
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </PopoverContent>
                                </Popover>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
}
