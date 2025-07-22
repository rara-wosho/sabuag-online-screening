"use client";
import { useEffect } from "react";

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen w-full flex items-center justify-center flex-col">
            <h2>Something went wrong!</h2>
            <p className="dark:text-neutral-400">{error.message}</p>

            <button onClick={reset}>Try again</button>
        </div>
    );
}
