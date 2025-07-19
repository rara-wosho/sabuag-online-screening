import { Quote } from "lucide-react";
import FeedbackForm from "./FeedbackForm";
import FeedbackCard from "./FeedbackCard";
import { createClient } from "@/utils/supabase/server";

export default async function FeedbackSection() {
    const db = await createClient();

    const { data, error } = await db
        .from("feedbacks")
        .select()
        .order("created_at", { ascending: false });

    return (
        <div className="w-full flex flex-col items-center">
            <h3 className="text-center text-4xl font-bold tracking-wider mb-6">
                Your <span className="text-primary">feedback</span> matters to
                us.
            </h3>

            <div className="flex flex-col items-center relative">
                <div className="opacity-30">
                    <Quote
                        size={120}
                        className="text-neutral-300/30 absolute left-1/2 -translate-x-1/2 -top-[1.3rem]"
                    />
                </div>
                <p className="italic text-center z-20 max-w-2xl leading-7  py-4 dark:text-neutral-400">
                    This website isn’t just a platform — it's also a testing
                    ground for our{" "}
                    <span className="font-semibold text-neutral-800 dark:text-neutral-200">
                        capstone project
                    </span>
                    . We're using the exact same tools and technologies here to
                    evaluate performance, usability, and compatibility. Your
                    feedback helps us fine-tune both this site and the system
                    we’re developing for our final project. Whether it’s a bug,
                    a confusing section, or a suggestion.
                </p>

                <p className="font-semibold text-lg text-primary">
                    - Israel De Vera
                </p>
                <p className="text-xs dark:text-neutral-400">
                    Developer{" "}
                    <span className="border-s ms-2 border-neutral-700 dark:border-neutral-600 ps-2">
                        Capstone leader
                    </span>
                </p>
            </div>

            <div
                className="grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2 w-full mt-20
            "
            >
                <FeedbackForm />

                <div className="flex flex-col px-2">
                    <p className="text-xl font-semibold mb-6">Feedbacks</p>

                    {data.length > 0 && (
                        <div className="grid grid-cols-1 gap-3">
                            {data.map((fb) => (
                                <div
                                    key={fb.id}
                                    className="md:pb-6 pb-4 mb-2 md:mb-4 dark:border-neutral-800/70 border-b"
                                >
                                    <FeedbackCard feedbackData={fb} />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
