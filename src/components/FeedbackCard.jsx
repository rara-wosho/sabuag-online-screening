import { cn } from "@/lib/utils";
import { dateFormatter } from "@/utils/date-formatter";
import { Frown, Laugh, Meh, Smile } from "lucide-react";

export default function FeedbackCard({ feedbackData }) {
    const initial = feedbackData.feedback_author.charAt(0);
    return (
        <div className="flex flex-col items-start gap-2 bg-white dark:bg-card rounded-lg border-transparent shadow-md backdrop-blur-lg p-4 h-full border dark:border-neutral-800 ">
            <div className="flex items-start gap-2">
                {/* avatar initials  */}
                <div className="rounded-full p-[3px] border-2 flex items-center justify-center border-neutral-300 dark:border-neutral-700 bg-transparent">
                    <div className="rounded-full bg-primary size-[34px] flex items-center justify-center">
                        <p className="text-white text-xs">{initial}</p>
                    </div>
                </div>
                <div>
                    <p className="tracking-wide">
                        {feedbackData.feedback_author}
                    </p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-2">
                        {dateFormatter(feedbackData.created_at)}
                    </p>
                </div>
            </div>

            <div className="relative flex flex-col flex-grow-1 w-full">
                <div className="flex items-center gap-2 mb-4 text-neutral-300 dark:text-neutral-700">
                    <div
                        className={cn(
                            feedbackData.rate == "1" && "text-accent-foreground"
                        )}
                    >
                        <Laugh size={18} />
                    </div>

                    <div
                        className={cn(
                            feedbackData.rate == "2" && "text-accent-foreground"
                        )}
                    >
                        <Smile size={18} />
                    </div>

                    <div
                        className={cn(
                            feedbackData.rate == "3" && "text-accent-foreground"
                        )}
                    >
                        <Meh size={18} />
                    </div>
                    <div
                        className={cn(
                            feedbackData.rate == "4" && "text-accent-foreground"
                        )}
                    >
                        <Frown size={18} />
                    </div>
                </div>
                <p className="dark:text-neutral-400 italic text-neutral-600 text-sm">
                    {feedbackData.feedback_message}
                </p>
            </div>
        </div>
    );
}
