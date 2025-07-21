"use client";

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function BackButton({ containerStyle, children }) {
    const router = useRouter();

    return (
        <button
            type="button"
            onClick={() => router.back()}
            className={cn("cursor-pointer ", containerStyle)}
        >
            {children}
        </button>
    );
}
