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
import { Button } from "@/components/ui/button";
import { deleteFeedback } from "@/lib/actions/feedback";

import { Trash } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function ReplyCardAction({ id }) {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);

    const handleDelete = async () => {
        setLoading(true);
        const { error } = await deleteFeedback(id);

        if (error) {
            toast.error(error);
        } else {
            toast.success("Deleted feedback successfully");
        }

        setLoading(false);
        setOpen(false);
    };
    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogTrigger className="cursor-pointer">
                <Trash size={18} className="text-destructive" />
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Do you want to delete this feedback?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete this feedback from the list.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <Button
                        disabled={loading}
                        onClick={handleDelete}
                        className="bg-destructive text-destructive-foreground hover:bg-destructive/80"
                    >
                        {loading ? "Deleting..." : "Yes, delete"}
                    </Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
