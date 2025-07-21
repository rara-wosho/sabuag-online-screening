import ApplicationCard from "@/components/ui/applicationCard";
import PrimaryLabel from "@/components/ui/PrimaryLabel";
import { createClient } from "@/utils/supabase/server";

export default async function AdminPage() {
    const db = await createClient();

    const { data, error } = await db
        .from("applicants")
        .select()
        .order("created_at", { ascending: false });

    if (error) {
        throw new Error(error.message);
    }

    const pending = data.filter((item) => item.status === "Pending");
    const done = data.filter((item) => item.status === "Done");

    return (
        <>
            <div className="mb-8">
                <div className="flex items-center justify-between">
                    <PrimaryLabel>Pending Applications</PrimaryLabel>
                    <p className="text-accent-foreground mb-3 text-xs rounded-full bg-accent px-3 py-1 border-accent-foreground border">
                        {pending.length} Pending
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3">
                    {pending.map((app) => (
                        <ApplicationCard key={app.id} applicantData={app} />
                    ))}
                </div>
            </div>

            <div className="mb-4">
                <div className="flex items-center justify-between">
                    <PrimaryLabel>Marked as Done</PrimaryLabel>
                    <p className="text-accent-foreground mb-3 text-xs rounded-full bg-accent px-3 py-1 border-accent-foreground border">
                        {done.length} Done
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3">
                    {done.map((app) => (
                        <ApplicationCard key={app.id} applicantData={app} />
                    ))}
                </div>
            </div>
        </>
    );
}
