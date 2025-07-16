"use client";

import { useRouter } from "next/navigation";

export default function BackButton({ containerStyle, label }) {
    const router = useRouter();

    return (
        <button
            type="button"
            onClick={() => router.back()}
            className={containerStyle}
        >
            {label}
        </button>
    );
}
