import BreadCrumbs from "@/components/BreadCrumbs";
import ToggleApplicationStatus from "@/components/ToggleApplicationStatus";
import { dateFormatter } from "@/utils/date-formatter";
import { createClient } from "@/utils/supabase/server";

const links = [
    { href: "", label: "Home" },
    { href: "/admin", label: "Applications" },
    { href: "", label: "Details" },
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
            <div className="flex items-center mb-2 justify-between">
                <h1 className="text-xl md:text-2xl text-neutral-900 dark:text-neutral-300">
                    {data.fullname}
                </h1>

                <ToggleApplicationStatus
                    applicationId={data.id}
                    status={data.status}
                />
            </div>
            <div className="flex items-end border-b pb-3 dark:border-b-neutral-900">
                <h1 className="text-neutral-600 dark:text-neutral-400">
                    {data.position_name}
                </h1>

                <p className="text-sm ms-auto dark:text-neutral-400 text-neutral-600">
                    {dateFormatter(data.created_at)}
                </p>
            </div>

            <div className="py-3 mb-2 border-b dark:border-b-neutral-900 text-neutral-600 dark:text-neutral-400">
                <p className="dark:text-neutral-400 mb-2 text-xs">Contacts</p>

                <p className="mb-1">Email : {data.email}</p>
                <p>
                    Facebook :{" "}
                    {data.facebook ? (
                        data.facebook
                    ) : (
                        <span className="opacity-50">N/A</span>
                    )}
                </p>
            </div>

            <div className="py-3 mb-3">
                <p className="dark:text-neutral-400 mb-3 text-xs">
                    Output Link
                </p>

                <div className="text-[13px] mb-8 inline-flex rounded items-center bg-accent/50 px-2">
                    <a
                        href={data.output_link}
                        target="_blank"
                        className="text-accent-foreground  py-1.5 rounded wrap-anywhere"
                    >
                        {/* {data.output_link} */}
                        https://drive.google.com/file/d/13wMqGVtyVc37qTw8egpi2NbR60qOTnLs/view?usp=drive_link
                    </a>
                </div>
                <p className="dark:text-neutral-400 mb-3 text-xs">
                    Sample output
                </p>

                <p className="text-neutral-700/90 dark:text-neutral-300/70">
                    {data.output}
                </p>
            </div>
        </div>
    );
}
