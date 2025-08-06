import PrimaryLabel from "@/components/ui/PrimaryLabel";
import { dateFormatter } from "@/utils/date-formatter";
import { createClient } from "@/utils/supabase/server";
import { Suspense } from "react";

export default function Page() {
    return (
        <div>
            <PrimaryLabel>Manage Feedbacks</PrimaryLabel>
            <Suspense fallback={<p>Loading feedbacks...</p>}>
                <FeedbackList />
            </Suspense>
        </div>
    );
}

async function FeedbackList() {
    const db = await createClient();
    const { data, error } = await db
        .from("feedbacks")
        .select()
        .order("created_at", { ascending: false });

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {error ? (
                <p>
                    Something went wrong while we load the feedbacks. Please try
                    again.
                </p>
            ) : (
                data.map((fb) => (
                    <div
                        key={fb.id}
                        className="list border bg-white dark:bg-card rounded-lg dark:border-neutral-800/90 p-3"
                    >
                        <h5 className="font-semibold text-neutral-800 dark:text-neutral-300 mb-1">
                            {fb.feedback_author}
                        </h5>
                        <p className="text-xs text-neutral-600 dark:text-neutral-400 pb-2 mb-2 border-b dark:border-b-neutral-800/90">
                            {dateFormatter(fb.created_at)}
                        </p>
                        <p className="text-neutral-600 dark:text-neutral-300/90 text-sm">
                            {fb.feedback_message}
                        </p>
                    </div>
                ))
            )}
        </div>
    );
}
