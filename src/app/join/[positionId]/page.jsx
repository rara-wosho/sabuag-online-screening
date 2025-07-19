import ApplicationForm from "@/components/ApplicationForm";
import ApplicationGuide from "@/components/ApplicationGuide";
import { createClient } from "@/utils/supabase/server";
import { notFound } from "next/navigation";

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

    console.log("position data", data);

    return (
        <div className="pt-16 w-full max-w-[1200px] mx-auto">
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
                        <ApplicationGuide />
                        <ApplicationForm />
                    </div>
                </div>
            )}
        </div>
    );
}
