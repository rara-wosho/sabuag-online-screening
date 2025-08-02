"use client";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { deletePosition } from "@/lib/actions/positions";
import { Loader, Trash } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const DeleteAlert = ({ id, title }) => {
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
    return (
        <AlertDialog>
            <AlertDialogTrigger className="dark:text-red-400/80 text-red-600 cursor-pointer justify-center flex items-center gap-2 text-sm bg-red-400/10 p-2 rounded mt-4">
                {deleteLoading ? (
                    <Loader className="animate-spin" size={15} />
                ) : (
                    <Trash size={14} />
                )}
                {deleteLoading ? "Deleting..." : "Delete Position"}{" "}
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Are you sure you want to delete this position?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        This action will permanently remove the position {title}{" "}
                        from the list.
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter>
                    <AlertDialogCancel className="cursor-pointer">
                        Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction
                        className="bg-red-600/80 dark:bg-red-500/70 text-white cursor-pointer"
                        onClick={() => handleDeletePosition(id)}
                    >
                        <Trash size={14} />
                        Yes, delete
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default DeleteAlert;
