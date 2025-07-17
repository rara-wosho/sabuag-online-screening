"use client";

import { cn } from "@/lib/utils";
import { useFormStatus } from "react-dom";

const SubmitButton = ({ label, containerStyle }) => {
    const { pending } = useFormStatus();

    return (
        <button
            className={cn(
                containerStyle,
                " bg-primary flex items-center justify-center py-1 px-4 text-white rounded cursor-pointer"
            )}
            type="submit"
        >
            {pending ? "Please wait..." : label}
        </button>
    );
};

export default SubmitButton;
