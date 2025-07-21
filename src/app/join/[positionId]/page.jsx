import ApplicationForm from "@/components/ApplicationForm";
import ApplicationGuide from "@/components/ApplicationGuide";
import BreadCrumbs from "@/components/BreadCrumbs";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { notFound } from "next/navigation";

const links = [
    { href: "/", label: "Home" },
    { href: "/join", label: "Join" },
    { href: "", label: "Application Form" },
];
export default async function Page({ params }) {
    const { positionId } = await params;

    const db = await createClient();

    const { data, error } = await db
        .from("positions")
        .select()
        .eq("id", positionId)
        .eq("is_open", true)
        .single();

    if (error) {
        notFound();
    }

    return (
        <div className="pt-[4.8rem] w-full max-w-[1200px] mx-auto">
            <BreadCrumbs links={links} />
            {!data && (
                <div className="flex flex-col items-center">
                    <h2 className="text-xl pt-16 text-center">
                        This Position Is No Longer Available
                    </h2>

                    <p className="dark:text-neutral-400 text-center py-2 mb-3">
                        Looks like the role you’re trying to view has been
                        filled or removed.
                    </p>

                    <Link href="/join">
                        <Button variant="outline">View Open Positions</Button>
                    </Link>
                </div>
            )}

            {data && (
                <div className="flex flex-col py-4 mb-6">
                    <div className="mb-8 border-b">
                        <p className="text-2xl font-semibold">{data.title}</p>
                        <p className="dark:text-neutral-400 py-2 mb-3">
                            {data.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12">
                        <div className="md:mb-0 mb-4 md:border-b-0 border-b pb-4 md:pb-0">
                            <ApplicationGuide />
                        </div>
                        <ApplicationForm
                            positionId={positionId}
                            position_name={data.title}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
