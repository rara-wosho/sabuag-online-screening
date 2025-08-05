import { createClient } from "@/utils/supabase/server";
import PrimaryLabel from "../ui/PrimaryLabel";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import Link from "next/link";

export default async function MembersOverview() {
    const db = await createClient();
    const { data, error } = await db.from("users").select().limit(5);

    if (error) {
        throw new Error("We cannot fetch users' data.");
    }
    return (
        <div className="mt-2 pt-6 shadow-xs border-t dark:border-t-neutral-800">
            <div className="flex items-center">
                <PrimaryLabel>Members</PrimaryLabel>
                <Button variant="outline" size="sm" asChild>
                    <Link href="/admin/members" className="mb-4 ms-auto">
                        View All <ChevronRight />
                    </Link>
                </Button>
            </div>

            <Table className="bg-white dark:bg-transparent">
                <TableHeader className="bg-white dark:bg-card">
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Position</TableHead>
                        <TableHead>Course</TableHead>
                        <TableHead>Address</TableHead>
                        <TableHead className="text-right">Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((user) => (
                        <TableRow key={user?.id}>
                            <TableCell className="py-1">
                                <Button
                                    variant="link"
                                    asChild
                                    className="p-0 text-neutral-800 dark:text-neutral-300"
                                >
                                    <Link
                                        href={`/user/${user?.id}`}
                                        className="p-0"
                                    >
                                        {user?.firstname} {user?.lastname}
                                    </Link>
                                </Button>
                            </TableCell>
                            <TableCell>
                                {user?.position ? (
                                    user?.position
                                ) : (
                                    <p className="text-neutral-500">-</p>
                                )}
                            </TableCell>
                            <TableCell>
                                {user?.course ? (
                                    user?.course
                                ) : (
                                    <p className="text-neutral-500">-</p>
                                )}
                            </TableCell>
                            <TableCell>
                                {user?.address ? (
                                    user?.address
                                ) : (
                                    <p className="text-neutral-500">-</p>
                                )}
                            </TableCell>
                            <TableCell className="text-right">
                                {user?.status}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
