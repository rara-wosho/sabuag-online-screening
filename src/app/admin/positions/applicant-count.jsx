"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ApplicantCount({ id }) {
    const [loading, setLoading] = useState(true);
    const [count, setCount] = useState(0);
    console.log("position id : ", id);

    const fetchCount = async () => {
        const supabase = createClient();

        const { data, error } = await supabase
            .from("applicants")
            .select("fullname")
            .eq("position_id", id);

        if (data) {
            setCount(data.length);
        }

        setLoading(false);
    };
    useEffect(() => {
        fetchCount();
    }, []);

    if (loading || count === 0) return null;

    return (
        <Link href={`/admin/positions/${id}`} className="mt-auto">
            <div className="bg-accent inline-flex px-3 py-1 rounded-full mt-3">
                <p className="text-xs text-accent-foreground">
                    {count} Applicant{count > 1 ? "s" : ""}
                </p>
            </div>
        </Link>
    );
}
