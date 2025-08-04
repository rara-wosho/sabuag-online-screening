"use client";

import Form from "next/form";
import React from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select";
import SubmitButton from "./ui/SubmitButton";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import { updateUserStatus } from "@/lib/actions/user";
import { toast } from "sonner";

export default function MarkMembersAction({ selectedIds, setSelectedIds }) {
    const handleBulkUpdate = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const status = formData.get("status") || "";

        if (status === "") {
            toast.error("Please select a status");
        }

        const { success, error } = await updateUserStatus(selectedIds, status);
        if (error) {
            toast.error(error);
        }

        if (success) {
            toast.success("Updated the status successfully.");
            setSelectedIds([]);
        }
    };

    return (
        <Form
            onSubmit={handleBulkUpdate}
            className="fixed bottom-0 md:bottom-[2rem] left-1/2 -translate-x-1/2 p-2 border md:rounded-lg grid grid-cols-2 gap-2.5 w-full max-w-lg bg-white shadow-lg dark:bg-neutral-950 z-40"
        >
            <Select name="status">
                <SelectTrigger className="border w-full dark:border-neutral-600 shadow-none bg-transparent">
                    <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
            </Select>

            <div className="flex items-center gap-2">
                <SubmitButton
                    type="submit"
                    containerStyle="grow cursor-pointer"
                    label="Update"
                />
                <Button
                    onClick={() => setSelectedIds([])}
                    size="icon"
                    variant="secondary"
                    className="rounded-full cursor-pointer"
                >
                    <X />
                </Button>
            </div>
        </Form>
    );
}
