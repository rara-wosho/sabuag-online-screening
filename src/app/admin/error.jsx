"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Error({ error }) {
    const router = useRouter();
    return (
        <div className="min-h-[70vh] w-full items-center justify-center flex flex-col">
            <Image
                src="/error-icon.svg"
                width={210}
                height={210}
                alt="error icon"
                className="opacity-50"
            />
            <h2>Something went wrong!</h2>
            <p className="py-2 text-center text-neutral-600 dark:text-neutral-400">
                Please make sure that you have a stable internet connection.
            </p>

            <div className="flex items-center gap-3 mt-4">
                <Button onClick={() => router.refresh()} variant="outline">
                    Try again
                </Button>
            </div>
        </div>
    );
}
