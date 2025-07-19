import ApplicationCard from "@/components/ui/applicationCard";
import PrimaryLabel from "@/components/ui/PrimaryLabel";
import { createClient } from "@/utils/supabase/server";

export default async function AdminPage() {
    const db = await createClient();

    const { data, error } = await db
        .from("applicants")
        .select()
        .order("created_at", { ascending: false });

    return (
        <>
            <div className="flex items-center justify-between">
                <PrimaryLabel>Pending Applications</PrimaryLabel>
                <p className="text-accent-foreground mb-3 text-xs rounded-full bg-accent px-3 py-1 border-accent-foreground border">
                    {data.length} Pending
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3">
                {data.map((app) => (
                    <ApplicationCard key={app.id} applicantData={app} />
                ))}
            </div>
        </>
    );
}
