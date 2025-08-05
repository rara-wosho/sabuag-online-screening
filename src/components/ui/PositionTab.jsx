"use client";

import { cn } from "@/lib/utils";
import { Pen } from "lucide-react";

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import SubmitButton from "./SubmitButton";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { updatePosition } from "@/lib/actions/positions";
import { toast } from "sonner";
import { useState } from "react";
import ApplicantCount from "@/app/admin/positions/applicant-count";
import DeleteAlert from "../alert-delete";
import { Button } from "./button";
import { ScrollArea } from "./scroll-area";

export default function PositionTab({ id, title, description, is_open }) {
    const [openDialog, setOpenDialog] = useState(false);

    async function handleUpdate(formData) {
        const this_id = formData.get("id");
        const this_title = formData.get("title");
        const this_description = formData.get("description");
        const this_is_open = formData.get("is_open") === "yes";

        const data = { this_id, this_title, this_description, this_is_open };
        const { success, message } = await updatePosition(data);

        if (!success) {
            toast.error("Failed to update position.", message);
        }

        if (success) {
            toast.success("Updated successfully");

            setTimeout(() => {
                setOpenDialog(false);
            }, 1000);
        }
    }

    return (
        <>
            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                <DialogContent
                    // onOpenAutoFocus={(event) => event.preventDefault()}
                    className="bg-card"
                >
                    <DialogHeader>
                        <DialogTitle className="text-start">
                            Position Details
                        </DialogTitle>
                    </DialogHeader>
                    <DialogDescription></DialogDescription>
                    <form action={handleUpdate}>
                        <input type="hidden" name="id" value={id} />
                        <div className="mb-3">
                            <p className="mb-1">Title</p>
                            <Input
                                placeholder="Title"
                                defaultValue={title}
                                name="title"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <p className="mb-1">Description</p>
                            <Textarea
                                placeholder="Description"
                                defaultValue={description}
                                name="description"
                                className="min-h-14 whitespace-break-spaces max-w-full"
                            />
                        </div>
                        <div className="mb-1 mt-4 flex flex-col items-start">
                            <Select
                                name="is_open"
                                defaultValue={is_open ? "yes" : "no"}
                            >
                                <p className="mb-1">Accept applicants?</p>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Accept applicants" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="yes">Accept</SelectItem>
                                    <SelectItem value="no">
                                        Do not accept
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                            <small className="text-xs text-neutral-400 ms-auto mt-2">
                                {is_open
                                    ? "Currently accepting"
                                    : "Not accepting"}
                            </small>
                        </div>
                        <div className="flex justify-end gap-3 pt-4 mt-3">
                            <DialogClose asChild>
                                <button
                                    className="border border-neutral-400 px-4 rounded cursor-pointer dark:border-neutral-700 dark:text-neutral-300"
                                    type="button"
                                >
                                    Close
                                </button>
                            </DialogClose>
                            <SubmitButton label="Update Details" />
                        </div>
                    </form>
                    {/* delete confirmation alert for removing position */}
                    <DeleteAlert id={id} title={title} />
                </DialogContent>

                {/* MAIN BODY  */}
                <div
                    className={cn(
                        "border border-neutral-200 dark:border-neutral-700/60 rounded-md p-3 bg-white dark:bg-card flex flex-col"
                    )}
                >
                    <DialogTrigger className="w-full cursor-pointer flex flex-col items-start">
                        <div className="flex items-center mb-1 w-full">
                            <h1 className="font font-semibold tracking-widest">
                                {title}
                            </h1>
                            {is_open && (
                                <div className="relative ms-3">
                                    <div className="size-2 bg-primary rounded-full"></div>
                                    <div className="size-2 bg-primary rounded-full animate-ping absolute top-0"></div>
                                </div>
                            )}
                            <div className="ms-auto scale-0 group-hover:scale-100 duration-200 transition-transform">
                                <Pen size={14} />
                            </div>
                        </div>

                        <p className="text-[14px] text-neutral-700 dark:text-neutral-400 text-start">
                            {!description ? (
                                <span className="italic">
                                    No description provided.
                                </span>
                            ) : (
                                description
                            )}
                        </p>
                    </DialogTrigger>

                    {is_open && (
                        <div className="inline-flex mt-auto">
                            <ApplicantCount id={id} />
                        </div>
                    )}
                </div>
            </Dialog>
        </>
    );
}
