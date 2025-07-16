"use client";

import { useEffect, useState } from "react";

export const ToggleThemeButton = () => {
    const [dark, setDark] = useState(true);

    useEffect(() => {
        const html = document.querySelector("html");
        if (dark) {
            html.classList.add("dark");
        } else {
            html.classList.remove("dark");
        }
    }, [dark]);

    return (
        <button
            onClick={() => {
                setDark(!dark);
            }}
        >
            Toggle {dark ? "light" : "dark"} Theme
        </button>
    );
};
