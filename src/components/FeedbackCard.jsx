import { cn } from "@/lib/utils";
import { dateFormatter } from "@/utils/date-formatter";
import { Frown, Laugh, Meh, Smile } from "lucide-react";

export default function FeedbackCard({ feedbackData }) {
    const initial = feedbackData.feedback_author.charAt(0);
    return (
        <div>
            <div className="flex flex-row items-start gap-2">
                <div className="rounded-full z-20 p-[3px] border-2 flex items-center justify-center border-neutral-300 dark:border-neutral-700 bg-background">
                    <div className="rounded-full bg-primary size-[32px] flex items-center justify-center">
                        <p className="text-white text-xs">{initial}</p>
                    </div>
                </div>
                <div className="relative after:absolute after:-left-[30px] after:w-[1px] after:bottom-[8px] after:h-[calc(100%-30px)]  dark:after:bg-neutral-800 after:bg-neutral-400/30 after:rounded-full before:absolute before:h-[1px] before:w-4 dark:before:bg-neutral-800 before:bg-neutral-300 before:rounded-full before:-left-[30px] before:bottom-[8px]">
                    <p className="tracking-wide">
                        {feedbackData.feedback_author}
                    </p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-2">
                        {dateFormatter(feedbackData.created_at)}
                    </p>

                    <div className="flex items-center gap-2 mb-4 text-neutral-300 dark:text-neutral-700">
                        <div
                            className={cn(
                                feedbackData.rate == "1" &&
                                    "text-accent-foreground"
                            )}
                        >
                            <Laugh size={18} />
                        </div>

                        <div
                            className={cn(
                                feedbackData.rate == "2" &&
                                    "text-accent-foreground"
                            )}
                        >
                            <Smile size={18} />
                        </div>

                        <div
                            className={cn(
                                feedbackData.rate == "3" &&
                                    "text-accent-foreground"
                            )}
                        >
                            <Meh size={18} />
                        </div>
                        <div
                            className={cn(
                                feedbackData.rate == "4" &&
                                    "text-accent-foreground"
                            )}
                        >
                            <Frown size={18} />
                        </div>
                    </div>

                    <p className="dark:text-neutral-400 italic text-neutral-600">
                        {feedbackData.feedback_message}
                    </p>
                </div>
            </div>
        </div>
    );
}
