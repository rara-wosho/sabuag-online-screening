"use client";

import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";
import { useFormStatus } from "react-dom";
import { Button } from "./button";

const SubmitButton = ({ label, containerStyle, size, variant }) => {
    const { pending } = useFormStatus();

    return (
        <Button
            size={size}
            variant={variant}
            className={cn(
                containerStyle,
                "bg-primary flex items-center gap-2 justify-center py-1 px-4 text-white rounded cursor-pointer"
            )}
            type="submit"
        >
            {label}
            {pending && <Loader size={14} className="animate-spin" />}
        </Button>
    );
};

export default SubmitButton;
