"use client";

import { Input } from "./ui/input";
import SubmitButton from "./ui/SubmitButton";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import { submitFeedback } from "@/lib/actions/feedback";
import { Frown, Laugh, Meh, Smile } from "lucide-react";
import { useCallback, useState } from "react";
import { cn } from "@/lib/utils";
import FormLabel from "./FormLabel";
import Link from "next/link";

export default function FeedbackForm() {
    const [rate, setRate] = useState("1");

    const handleSubmit = useCallback(async (formData) => {
        const feedback_message = formData.get("feedback_message").toString();
        const feedback_author = formData.get("full_name").toString();
        const contact = formData.get("contact").toString();
        const rate = formData.get("rate").toString();

        const data = { feedback_message, feedback_author, rate, contact };

        const res = await submitFeedback(data);

        if (res.success) {
            toast.success(
                "Submitted successfully. Thank you for your feedback"
            );
        } else {
            toast.error("Submition failed.");
        }
    }, []);

    const handleRateChange = (e) => {
        setRate(e.target.value);
    };

    return (
        <div>
            <form
                action={handleSubmit}
                className="bg-white border dark:border-neutral-800 shadow dark:bg-card p-3 md:p-4 rounded-lg w-full"
            >
                <p className="text-xl font-semibold mb-2">Feedback Form</p>
                <p className="text-sm dark:text-neutral-400 text-neutral-500 tracking-wider mb-6 border-b pb-5 dark:border-b-neutral-800">
                    Complete the form details below and we'll follow up with you
                    soon to discuss your feedback.
                </p>
                <div className="mb-3">
                    <FormLabel label="Full Name" required />
                    <Input
                        required
                        name="full_name"
                        placeholder="Enter your full name..."
                    />
                </div>

                <FormLabel label="Feedback" required />
                <Textarea
                    required
                    className="min-h-28"
                    name="feedback_message"
                    placeholder="Enter your message here..."
                />
                <p className="dark:text-neutral-300 text-neutral-600 mb-2 text-sm mt-4">
                    How was your experience?
                </p>

                <div className="flex items-center gap-3 mb-6 dark:text-neutral-600 text-neutral-400">
                    <label
                        className={cn(
                            "flex items-center justify-center p-1 rounded-full",
                            rate === "1" && "text-accent-foreground bg-accent"
                        )}
                        htmlFor="1"
                    >
                        <input
                            className="hidden"
                            onChange={handleRateChange}
                            value="1"
                            type="radio"
                            name="rate"
                            id="1"
                        />
                        <Laugh size={26} />
                    </label>
                    <label
                        className={cn(
                            "flex items-center justify-center p-1 rounded-full",
                            rate === "2" && "text-accent-foreground bg-accent"
                        )}
                        htmlFor="2"
                    >
                        <input
                            className="hidden"
                            onChange={handleRateChange}
                            value="2"
                            type="radio"
                            name="rate"
                            id="2"
                        />
                        <Smile size={26} />
                    </label>
                    <label
                        className={cn(
                            "flex items-center justify-center p-1 rounded-full",
                            rate === "3" && "text-accent-foreground bg-accent"
                        )}
                        htmlFor="3"
                    >
                        <input
                            className="hidden"
                            onChange={handleRateChange}
                            value="3"
                            type="radio"
                            name="rate"
                            id="3"
                        />
                        <Meh size={26} />
                    </label>
                    <label
                        className={cn(
                            "flex items-center justify-center p-1 rounded-full",
                            rate === "4" && "text-accent-foreground bg-accent"
                        )}
                        htmlFor="4"
                    >
                        <input
                            className="hidden"
                            onChange={handleRateChange}
                            value="4"
                            type="radio"
                            name="rate"
                            id="4"
                        />
                        <Frown size={26} />
                    </label>
                </div>

                <div className="rounded-md mb-8 p-3 border dark:border-neutral-800 mt-6">
                    <p className="dark:text-neutral-300 text-neutral-600 mb-3 text-sm">
                        Only the admin team can see this.
                    </p>

                    <p className="text-[13px] mb-3 dark:text-neutral-400">
                        Feel free to leave any contact info so we can get in
                        touch about your feedback if needed. (Optional)
                    </p>
                    <Input
                        name="contact"
                        placeholder="Facebook, Instagram, or Email"
                    />
                </div>
                <SubmitButton containerStyle="w-full mt-4" label="Submit" />
                <p className="dark:text-neutral-400 text-xs text-center w-full py-4">
                    By submitting, you agree to our{" "}
                    <Link
                        href="/privacy-policy"
                        className="text-accent-foreground"
                    >
                        privacy policy.
                    </Link>
                </p>
            </form>
        </div>
    );
}
