"use client";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

export default function SafariWarning() {
    const [showWarning, setShowWarning] = useState(false);

    useEffect(() => {
        // prevent showing multiple times
        const seen = localStorage.getItem("safariWarningSeen");
        if (seen) return;

        const ua = navigator.userAgent;
        const isIOS = /iP(hone|od|ad)/.test(ua);
        const safariVersionMatch = ua.match(/Version\/(\d+)/);

        if (isIOS && safariVersionMatch) {
            const version = parseInt(safariVersionMatch[1], 10);
            if (version < 16.4) {
                setShowWarning(true);
                localStorage.setItem("safariWarningSeen", "true");
            }
        }
    }, []);

    if (!showWarning) return null;

    return (
        <div
            className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-md 
                    bg-yellow-100 border border-yellow-300 text-yellow-800 
                    px-4 py-3 rounded-lg shadow-md text-sm flex items-center gap-3"
        >
            <span>
                ⚠️ Some components may not work properly on older Safari/iOS.
                For the best experience, use an updated browser.
            </span>
            <button
                onClick={() => setShowWarning(false)}
                className="ms-auto text-yellow-900 hover:text-yellow-700 font-bold"
                aria-label="Close"
            >
                <X />
            </button>
        </div>
    );
}
