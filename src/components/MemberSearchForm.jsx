"use client";

import Form from "next/form";
import { Input } from "./ui/input";
import SubmitButton from "./ui/SubmitButton";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function MemberSearchForm() {
    const searchParams = useSearchParams();
    const search = searchParams.get("search") || "";

    const [searchValue, setSearchValue] = useState(search);

    useEffect(() => {
        setSearchValue(search);
    }, [search]);

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
            <SubmitButton variant="outline" label="Search" />
        </Form>
    );
}
