"use client";
import { Input } from "./ui/input";
import SubmitButton from "./ui/SubmitButton";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import { submitFeedback } from "@/lib/actions/feedback";

export default function FeedbackForm() {
    const handleSubmit = async (formData) => {
        const feedback_message = formData.get("feedback_message");
        const feedback_author = formData.get("full_name");

        const data = { feedback_message, feedback_author };

        const res = await submitFeedback(data);

        if (res.success) {
            toast.success(
                "Submitted successfully. Thank you for your feedback"
            );
        } else {
            toast.error("Submition failed.");
        }
    };

    return (
        <div>
            <p className="text-xs dark:text-neutral-400 text-neutral-500 tracking-wider mb-3">
                Complete the form below, and we'll follow up with you soon to
                discuss your feedback.
            </p>

            <form
                action={handleSubmit}
                className="bg-white border dark:border-neutral-800 shadow dark:bg-card p-4 rounded-lg w-full"
            >
                <p className="dark:text-neutral-300 text-neutral-600 mb-2 text-sm">
                    Full Name
                </p>
                <Input
                    required
                    name="full_name"
                    placeholder="Enter your full name..."
                />
                <p
                    className="dark:text-neutral-300 text-neutral-600 mb-2 text-sm mt-4
                "
                >
                    Feedback
                </p>
                <Textarea
                    required
                    name="feedback_message"
                    placeholder="Enter your message here..."
                />

                <p
                    className="dark:text-neutral-300 text-neutral-600 mb-2 text-sm mt-4
                "
                >
                    Rate your experience
                </p>

                <SubmitButton containerStyle="w-full mt-4" label="Submit" />

                <p className="dark:text-neutral-400 text-xs text-center w-full mt-3">
                    By submitting, you agree to our privacy and policy.
                </p>
            </form>
        </div>
    );
}
