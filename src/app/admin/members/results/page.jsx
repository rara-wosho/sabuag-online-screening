import MembersTable from "@/components/MembersTable";
import BackButton from "@/components/ui/BackButton";
import { createClient } from "@/utils/supabase/server";
import { ChevronLeft } from "lucide-react";

export default async function ResultsPage({ searchParams }) {
    const search = (await searchParams)?.search || "";
    const db = await createClient();

    const { data: results, error } = await db
        .from("users")
        .select("*")
        .or(
            `firstname.ilike.%${search}%,lastname.ilike.%${search}%,middlename.ilike.%${search}%,address.ilike.%${search}%`
        );

    return (
        <div className="mt-6">
            <div className="flex items-center mb-3">
                <BackButton containerStyle="hover:text-accent-foreground flex items-center">
                    <ChevronLeft size={17} />
                    <span className="text-sm">Back</span>
                </BackButton>
                <p className="ms-auto text-sm text-neutral-600 dark:text-neutral-400">
                    Showing {results.length} result{results.length > 1 && "s"}{" "}
                    for '{search}'
                </p>
            </div>
            <MembersTable members={results} search={search} />
        </div>
    );
}
