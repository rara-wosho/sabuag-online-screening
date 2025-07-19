import BreadCrumbs from "@/components/BreadCrumbs";
import { dateFormatter } from "@/utils/date-formatter";
import { createClient } from "@/utils/supabase/server";

const links = [
    { href: "", label: "Home" },
    { href: "/admin", label: "Applications" },
    { href: "", label: "Application Details" },
];
export default async function ApplicationDetails({ params }) {
    const { applicationId } = await params;

    const db = await createClient();

    const { data, error } = await db
        .from("applicants")
        .select()
        .eq("id", applicationId)
        .single();

    return (
        <div>
            <BreadCrumbs containerStyle="mb-2" links={links} />
            <h1 className="text-xl md:text-2xl mb-2">{data.fullname}</h1>
            <div className="flex items-end border-b pb-3">
                <h1 className="text-neutral-600 dark:text-neutral-400">
                    Position Applying : {data.position_name}
                </h1>

                <p className="text-sm ms-auto">
                    {dateFormatter(data.created_at)}
                </p>
            </div>
        </div>
    );
}
