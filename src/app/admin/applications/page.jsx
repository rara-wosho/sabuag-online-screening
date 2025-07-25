import { createClient } from "@/utils/supabase/server";

import ApplicationsTable from "@/components/ApplicationsTable";

export default async function AdminPage() {
    const db = await createClient();

    const { data, error } = await db
        .from("applicants")
        .select()
        .order("created_at", { ascending: false });

    if (error) {
        throw new Error(error.message);
    }

    return (
        <div className="mb-8">
            <ApplicationsTable data={data} />
        </div>
    );
}
