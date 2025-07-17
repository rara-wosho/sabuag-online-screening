import ApplicationCard from "@/components/ui/applicationCard";
import PrimaryLabel from "@/components/ui/PrimaryLabel";
import { createClient } from "@/utils/supabase/server";

export default async function AdminPage() {
    const db = await createClient();

    const { data, error } = await db.from("applicants").select();

    console.log(data);
    return (
        <div>
            <PrimaryLabel>Pending Applications</PrimaryLabel>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3">
                {data.map((app) => (
                    <ApplicationCard key={app.id} applicantData={app} />
                ))}
            </div>
        </div>
    );
}
