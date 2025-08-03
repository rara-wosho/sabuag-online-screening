"use client";

import Form from "next/form";
import { Input } from "./ui/input";
import SubmitButton from "./ui/SubmitButton";
import { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";

export default function MemberSearchForm() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        let rawSearch = searchParams.get("search") || "";
        rawSearch = rawSearch.replace(/[^a-zA-Z0-9\s-]/g, "");

        const search = decodeURIComponent(rawSearch).trim();
        setSearchValue(search);
    }, [searchParams]);

    if (pathname === "/admin/members/create-user") return null;

    return (
        <Form
            action="/admin/members/results"
            className="flex w-full items-center ms-auto gap-2"
        >
            <Input
                name="search"
                type="search"
                placeholder="Search Member"
                className="text-sm"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <SubmitButton
                containerStyle="cursor-pointer"
                variant="outline"
                size="lg"
                label="Search"
                icon={<Search size={14} />}
                disabled={searchValue === ""}
            />
        </Form>
    );
}
