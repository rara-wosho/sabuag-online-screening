import { Quote } from "lucide-react";

export default function FeedbackSection() {
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
                    <span className="font-semibold text-neutral-200">
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
                <p className="text-xs dark:text-neutral-400">Developer</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2"></div>
        </div>
    );
}
