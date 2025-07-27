"use client";
import BackButton from "@/components/ui/BackButton";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen w-full flex items-center justify-center flex-col">
            <h2>Something went wrong!</h2>
            <p className="dark:text-neutral-400">{error.message}</p>

            <div className="flex items-center mt-4 gap-8">
                <Link href="/join">Back</Link>
                <BackButton
                    containerStyle="py-1.5 px-8 border rounded cursor-pointer"
                    label="Retry"
                />
            </div>
        </div>
    );
}
