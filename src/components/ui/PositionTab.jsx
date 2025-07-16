"use client";

import { cn } from "@/lib/utils";
import { ChevronRight, Pen, Trash } from "lucide-react";

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import SubmitButton from "./SubmitButton";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { deletePosition, updatePosition } from "@/lib/actions/positions";
import { toast } from "sonner";
import Submit from "./Submit";
import { Switch } from "./switch";

export default function PositionTab({ data, isOpen }) {
    const handleDeletePosition = async (id) => {
        const res = await deletePosition(id);

        if (res?.failed) {
            toast.error(res.message || "Unable to delete position.");
            return;
        }

        toast.success("Deleted successfully");
    };

    return (
        <>
            <Dialog>
                <DialogContent>
                    <DialogHeader>
                        <>
                            <DialogTitle className="text-start">
                                Details
                            </DialogTitle>
                        </>
                    </DialogHeader>
                    <form action={updatePosition}>
                        <input type="hidden" name="id" value={data.id} />
                        <div className="mb-3">
                            <p className="mb-1">Title</p>
                            <Input
                                placeholder="Title"
                                defaultValue={data.title}
                                name="title"
                            />
                        </div>
                        <div className="mb-3">
                            <p className="mb-1">Description</p>
                            <Textarea
                                placeholder="Description"
                                defaultValue={data.description}
                                name="description"
                            />
                        </div>
                        <div className="mb-1 mt-4 flex items-center">
                            <Switch
                                name="is_open"
                                defaultChecked={data.is_open}
                            />
                            <p className="mb-1 ms-2">Accept applicants</p>
                            {data.is_open && (
                                <small className="text-xs text-neutral-400 ms-auto">
                                    Currently Accepting
                                </small>
                            )}
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
                        <form
                            action={() => handleDeletePosition(data.id)}
                            className="flex justify-center"
                        >
                            <Submit
                                label="Remove position"
                                loadingLabel="Removing.."
                                icon={<Trash size={14} />}
                                containerStyle="dark:text-red-400/80 text-red-600 cursor-pointer"
                            />
                        </form>
                    </div>
                </DialogContent>

                <div
                    className={cn(
                        "border rounded-md p-3 dark:bg-neutral-900/30",
                        isOpen && "border-emerald-700 shadow"
                    )}
                >
                    <DialogTrigger className="w-full group cursor-pointer">
                        <div className="flex items-center mb-1">
                            <h1 className="font font-semibold group-hover:underline">
                                {data.title}
                            </h1>
                            {isOpen && (
                                <div className="relative ms-3">
                                    <div className="size-2 bg-emerald-500 dark:bg-emerald-600 rounded-full"></div>
                                    <div className="size-2 bg-emerald-500 dark:bg-emerald-600 rounded-full animate-ping absolute top-0"></div>
                                </div>
                            )}
                            <div className="ms-auto scale-0 group-hover:scale-100 duration-200 transition-transform">
                                <Pen size={14} />
                            </div>
                        </div>
                    </DialogTrigger>
                    <p className="text-[14px] text-neutral-500 dark:text-neutral-400">
                        {!data.description ? (
                            <span className="italic">
                                No description provided.
                            </span>
                        ) : (
                            data.description
                        )}
                    </p>
                </div>
            </Dialog>
        </>
    );
}
