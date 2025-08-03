import ApplicationsTable from "@/components/ApplicationsTable";
import BackButton from "@/components/ui/BackButton";
import { createClient } from "@/utils/supabase/server";
import { ChevronLeft } from "lucide-react";

export default async function ResultsPage({ searchParams }) {
    const search = (await searchParams)?.search || "";
    const db = await createClient();

    const { data: results, error } = await db
        .from("applicants")
        .select("*")
        .ilike("fullname", `%${search}%`);

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

            {results.length > 0 && (
                <ApplicationsTable data={results} search={search} />
            )}
        </div>
    );
}
