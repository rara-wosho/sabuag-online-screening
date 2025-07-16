"use client";

import { cn } from "@/lib/utils";
import { Loader, LoaderCircle } from "lucide-react";
import { useFormStatus } from "react-dom";

const Submit = ({ label, loadingLabel, containerStyle, icon }) => {
    const { pending } = useFormStatus();

    return (
        <button
            className={cn(
                "px-4 flex items-center gap-2",
                containerStyle,
                pending && "opacity-60"
            )}
            type="submit"
            disabled={pending}
        >
            {pending && (
                <div className="animate-spin">
                    <LoaderCircle size={14} />
                </div>
            )}

            {!pending && icon && icon}
            {pending ? loadingLabel : label}
        </button>
    );
};

export default Submit;
