import BreadCrumbs from "@/components/BreadCrumbs";
import ToggleApplicationStatus from "@/components/ToggleApplicationStatus";
import BackButton from "@/components/ui/BackButton";
import { dateFormatter } from "@/utils/date-formatter";
import { createClient } from "@/utils/supabase/server";
import { ChevronLeft, Facebook, Mail } from "lucide-react";

const links = [
    { href: "", label: "Applications" },
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
            <div className="grid grid-cols-1 gap-3 max-w-2xl mx-auto">
                <div className="left p-3 bg-card rounded-lg shadow border">
                    <div className="flex items-center mb-4 gap-x-2 pb-4 pt-2 border-b dark:border-neutral-800">
                        <BackButton containerStyle="text-sm flex items-center justify-center rounded-full hover:bg-accent hover:text-accent-foreground p-1.5 duration-200 transition-colors border">
                            <ChevronLeft size={18} />
                        </BackButton>
                        <div className="hidden md:flex items-center">
                            <BreadCrumbs links={links} />
                        </div>

                        <div className="ms-auto">
                            <ToggleApplicationStatus
                                applicationId={data.id}
                                status={data.status}
                            />
                        </div>
                    </div>
                    <h1 className="text-xl mb-1 md:text-2xl text-neutral-900 dark:text-neutral-300">
                        {data.fullname}
                    </h1>
                    <div className="flex items-end pb-3 mb-1">
                        <h1 className="text-neutral-600 dark:text-neutral-400">
                            {data.position_name}
                        </h1>

                        <p className="text-sm  ms-auto dark:text-neutral-400 text-neutral-600">
                            {dateFormatter(data.created_at)}
                        </p>
                    </div>

                    {data.about_self && (
                        <div className="mb-3 pb-3 border-b">
                            <p className="text-neutral-600 dark:text-neutral-300/90 text-sm">
                                {data.about_self}
                            </p>
                        </div>
                    )}

                    <div className="text-neutral-600 dark:text-neutral-400">
                        {/* <p className="dark:text-neutral-400 mb-2 text-xs">
                            Contacts
                        </p> */}

                        <p className="mb-3 gap-2 flex items-center bg-accent dark:bg-background p-2 rounded">
                            <Mail size={16} /> {data.email}
                        </p>
                        <p className="mb-1 gap-2 flex items-center bg-accent dark:bg-background p-2 rounded">
                            <Facebook size={16} />
                            {data.facebook ? (
                                data.facebook
                            ) : (
                                <span className="opacity-50">N/A</span>
                            )}
                        </p>
                    </div>
                </div>

                <div className="right border shadow p-3 bg-card rounded-lg">
                    <div className="py-3 mb-3">
                        <p className="dark:text-neutral-400 mb-3 text-xs">
                            Output Link
                        </p>

                        <div className="text-[13px] mb-8 flex rounded items-center bg-accent/50 px-2">
                            {data.output_link ? (
                                <a
                                    href={data.output_link}
                                    target="_blank"
                                    className="text-accent-foreground  py-1.5 rounded wrap-anywhere w-full"
                                >
                                    {data.output_link}
                                </a>
                            ) : (
                                <p className="opacity-50 py-1.5">N/A</p>
                            )}
                        </div>

                        {data.output && (
                            <>
                                <p className="dark:text-neutral-400 mb-3 text-xs">
                                    Sample output
                                </p>

                                <p className="text-neutral-700/90 dark:text-neutral-300/80">
                                    {data.output}
                                </p>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
