"use client";
import { useEffect } from "react";

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center">
            <h2>Something went wrong!!</h2>
            {error.message}
            <button onClick={reset}>Try again</button>
        </div>
    );
}
