"use client";

import { Ellipsis } from "lucide-react";
import FormLabel from "./FormLabel";

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
import Form from "next/form";
import SubmitButton from "./ui/SubmitButton";
import { updateUserRoleAndStatus } from "@/lib/actions/auth";
import { toast } from "sonner";

export default function MemberTableAction({ user }) {
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const role = formData.get("role")?.toString() || "";
        const status = formData.get("status")?.toString() || "";

        const { success, error } = await updateUserRoleAndStatus(
            user.id,
            role,
            status
        );

        if (error) {
            toast.error(error);
        }

        if (success) {
            toast.success("Successfully updated user role and status.");
        }
    };

    return (
        <Popover>
            <PopoverTrigger className="hover:text-accent-foreground hover:bg-accent px-1 rounded h-6 ms-2 text-neutral-700 dark:text-neutral-300 cursor-pointer">
                <Ellipsis
                    size={20}
                    className="hover:text-accent-foreground transition-colors  dark:hover:text-accent-foreground text-neutral-700 dark:text-neutral-300"
                />
            </PopoverTrigger>
            <PopoverContent className=" w-fit p-3">
                <Form onSubmit={handleSubmit} className="flex flex-col">
                    <div className="mb-2 border-b pb-2">
                        {user?.firstname} {user?.lastname}
                    </div>
                    <div className="mb-3">
                        <Select
                            name="role"
                            defaultValue={user.role}
                            disabled={user.role === "superadmin"}
                        >
                            <FormLabel label="Role" />
                            <SelectTrigger className="w-[250px] border dark:border-neutral-600 shadow-none bg-transparent">
                                <SelectValue placeholder={user.role} />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="user">User</SelectItem>
                                <SelectItem value="admin">Admin</SelectItem>
                                {user.role === "superadmin" && (
                                    <SelectItem value="superadmin">
                                        Super admin
                                    </SelectItem>
                                )}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="mb-3">
                        <Select
                            name="status"
                            defaultValue={user.status}
                            disabled={user.role === "superadmin"}
                        >
                            <FormLabel label="Status" />
                            <SelectTrigger className="w-[250px] border dark:border-neutral-600 shadow-none bg-transparent">
                                <SelectValue placeholder={user.status} />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="active">Active</SelectItem>
                                <SelectItem value="inactive">
                                    Inactive
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <SubmitButton
                        containerStyle="cursor-pointer"
                        label="Update"
                    />
                </Form>
            </PopoverContent>
        </Popover>
    );
}
