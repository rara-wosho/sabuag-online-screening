import PrimaryLabel from "@/components/ui/PrimaryLabel";
import { cn } from "@/lib/utils";
import { dateFormatter } from "@/utils/date-formatter";
import { createClient } from "@/utils/supabase/server";
import { Ellipsis, Frown, Laugh, Meh, Smile, Trash } from "lucide-react";
import { Suspense } from "react";
import ReplySection from "./ReplySection";
import ReplyCardAction from "./ReplyCardAction";

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
                        className="list border bg-white flex flex-col dark:bg-card rounded-lg dark:border-neutral-800/90 p-3"
                    >
                        <div className="flex items-center justify-between">
                            <h5 className="font-semibold text-neutral-800 dark:text-neutral-300 mb-1">
                                {fb.feedback_author}
                            </h5>
                            <ReplyCardAction id={fb.id} />
                        </div>
                        <p className="text-xs text-neutral-600 dark:text-neutral-400 pb-2 mb-2">
                            {dateFormatter(fb.created_at)}
                        </p>
                        <p className="text-neutral-600 grow dark:text-neutral-300/90 text-sm pb-2">
                            {fb.feedback_message}
                        </p>
                        <div className="flex items-center gap-2 text-neutral-300 dark:text-neutral-700 border-y dark:border-neutral-800/90 py-2">
                            <div
                                className={cn(
                                    fb.rate == "1" && "text-accent-foreground"
                                )}
                            >
                                <Laugh size={18} />
                            </div>

                            <div
                                className={cn(
                                    fb.rate == "2" && "text-accent-foreground"
                                )}
                            >
                                <Smile size={18} />
                            </div>

                            <div
                                className={cn(
                                    fb.rate == "3" && "text-orange-500"
                                )}
                            >
                                <Meh size={18} />
                            </div>
                            <div
                                className={cn(
                                    fb.rate == "4" && "text-orange-500"
                                )}
                            >
                                <Frown size={18} />
                            </div>
                        </div>

                        <div className="pt-2">
                            <ReplySection feedbackId={fb.id} />
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}
