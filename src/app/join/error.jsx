"use client";
export default function Error({ reset }) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <h2>Something went wrong!</h2>
            <button onClick={reset}>Try again</button>
        </div>
    );
}
