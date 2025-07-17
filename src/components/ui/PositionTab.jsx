"use client";

import { cn } from "@/lib/utils";
import { Pen, Trash } from "lucide-react";

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
import { deletePosition, updatePosition } from "@/lib/actions/positions";
import { toast } from "sonner";
import { useState } from "react";
import ApplicantCount from "@/app/admin/positions/applicant-count";

export default function PositionTab({ id, title, description, is_open }) {
    const [openDialog, setOpenDialog] = useState(false);
    const [deleteLoading, setDeleteLoading] = useState(false);

    const handleDeletePosition = async (id) => {
        setDeleteLoading(true);
        const res = await deletePosition(id);

        if (res?.failed) {
            toast.error(res.message || "Unable to delete position.");
            return;
        }

        toast.success("Deleted successfully");
        setDeleteLoading(false);
    };

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
                <DialogContent className="bg-card">
                    <DialogHeader>
                        <>
                            <DialogTitle className="text-start">
                                Details
                            </DialogTitle>
                        </>
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
                                required
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

                    <div className="pt-4 mt-3 border-t">
                        <button
                            onClick={() => handleDeletePosition(id)}
                            className="dark:text-red-400/80 text-red-600 cursor-pointer flex justify-center items-center gap-2 text-sm"
                            disabled={deleteLoading}
                        >
                            <Trash size={14} />
                            {deleteLoading ? "Removing..." : "Remove position"}
                        </button>
                    </div>
                </DialogContent>

                <div
                    className={cn(
                        "border rounded-md p-3 dark:bg-card flex flex-col"
                    )}
                >
                    <DialogTrigger className="w-full group cursor-pointer">
                        <div className="flex items-center mb-1">
                            <h1 className="font font-semibold group-hover:underline">
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
                    </DialogTrigger>

                    <p className="text-[14px] text-neutral-500 dark:text-neutral-400">
                        {!description ? (
                            <span className="italic">
                                No description provided.
                            </span>
                        ) : (
                            description
                        )}
                    </p>
                    {is_open && <ApplicantCount id={id} />}
                </div>
            </Dialog>
        </>
    );
}
