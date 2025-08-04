"use client";

import React from "react";
import { Checkbox } from "./ui/checkbox";

export default function ToggleAdditionalTableCol({
    additionalCols,
    setAdditionCols,
}) {
    const handleAdditionCol = (col) => {
        if (additionalCols.includes(col)) {
            setAdditionCols(additionalCols.filter((a) => a !== col));
        } else {
            setAdditionCols((prev) => [...prev, col]);
        }
    };
    return (
        <div className="border p-2 rounded mb-4 gap-2 flex items-center dark:border-neutral-800/80">
            <p className="text-xs">Show/hide column</p>
            <div className="flex bg-white dark:bg-transparent ms-auto items-center gap-2 border dark:border-neutral-800/70 rounded py-1 px-2">
                <Checkbox
                    checked={additionalCols.includes("course")}
                    onCheckedChange={() => handleAdditionCol("course")}
                    id="course"
                />
                <label className="text-sm" htmlFor="course">
                    Course
                </label>
            </div>
            <div className="flex bg-white dark:bg-transparent items-center gap-2 border dark:border-neutral-800/70 rounded py-1 px-2">
                <Checkbox
                    id="year"
                    checked={additionalCols.includes("year")}
                    onCheckedChange={() => handleAdditionCol("year")}
                />
                <label className="text-sm" htmlFor="year">
                    Year
                </label>
            </div>
            <div className="flex bg-white dark:bg-transparent items-center gap-2 border dark:border-neutral-800/70 rounded py-1 px-2">
                <Checkbox
                    id="joined"
                    checked={additionalCols.includes("joined")}
                    onCheckedChange={() => handleAdditionCol("joined")}
                />
                <label className="text-sm" htmlFor="joined">
                    Joined
                </label>
            </div>
        </div>
    );
}
