import { dateFormatter } from "@/utils/date-formatter";

export default function FeedbackCard({ feedbackData }) {
    const initial = feedbackData.feedback_author.charAt(0);
    return (
        <div>
            <div className="flex items-start gap-3">
                <div className="rounded-full p-[3px] border-2 flex items-center justify-center border-neutral-300 dark:border-neutral-700">
                    <div className="rounded-full bg-primary size-[32px] flex items-center justify-center">
                        <p className="text-white text-xs">{initial}</p>
                    </div>
                </div>
                <div>
                    <p className="tracking-wide">
                        {feedbackData.feedback_author}
                    </p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-4">
                        {dateFormatter(feedbackData.created_at)}
                    </p>

                    <p className="dark:text-neutral-400 italic text-neutral-600">
                        {feedbackData.feedback_message}
                    </p>
                </div>
            </div>
        </div>
    );
}
