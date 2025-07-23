"use client";

import Image from "next/image";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import SubmitButton from "./ui/SubmitButton";
import { submitApplication } from "@/lib/actions/application-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import FormLabel from "./FormLabel";
import Link from "next/link";

export default function ApplicationForm({ positionId, position_name }) {
    const router = useRouter();

    const handleSubmit = async (formData) => {
        const fullname = formData.get("full-name").toString();
        const email = formData.get("email").toString();
        const facebook = formData.get("facebook").toString();
        const output = formData.get("output").toString() || "";
        const output_link = formData.get("output-link").toString() || "";
        const about_self = formData.get("about-self").toString() || "";

        console.log("full name : ", fullname);

        if (!output_link.startsWith("https://") && output_link.length > 0) {
            toast.error("That is not a valid link.");

            return;
        }

        if (output === "" && output_link === "") {
            toast.error("Please provide your output.");
            return;
        }

        const data = {
            fullname,
            email,
            facebook,
            status: "Pending",
            output,
            output_link,
            positionId,
            position_name,
            about_self,
        };

        const { success } = await submitApplication(data);

        if (!success) {
            toast.error("Submission Failed.");
        } else {
            toast.message("Thanks  for applying!", {
                description: "We’ll review your work and get back to you soon.",
            });

            router.replace("/join");
        }
    };
    return (
        <div className="p-0 md:p-4 rounded-lg dark:bg-transparent dark:md:bg-card border-0 md:border dark:border-neutral-800 shadow-md bg-transparent md:bg-white">
            <div className="flex flex-col border-b items-center mb-4">
                <Image
                    className="mb-4"
                    src="/email.png"
                    width={40}
                    height={40}
                    alt="mail logo"
                />
                <p className="font-semibold text-xl dark:text-neutral-300 mb-3">
                    Application Form
                </p>
            </div>

            <p className="dark:text-neutral-400 text-sm mb-4">
                Please complete the form and upload a sample of your work. We’re
                excited to see what you’ve got!
            </p>
            <form
                onSubmit={async (e) => {
                    e.preventDefault();

                    const formData = new FormData(e.currentTarget);
                    await handleSubmit(formData);
                }}
                className="py-4"
            >
                <div className="mb-3">
                    <FormLabel label="Full Name" required />
                    <Input
                        required
                        name="full-name"
                        placeholder="Enter your full name"
                    />
                </div>

                <div className="mb-3">
                    <FormLabel label="Email" required />
                    <Input
                        required
                        name="email"
                        placeholder="Enter your email"
                        type="email"
                    />
                </div>

                <div className="mb-3">
                    <p className="dark:text-neutral-300 text-neutral-600 mb-1 text-sm">
                        Facebook (Optional)
                    </p>
                    <Input
                        name="facebook"
                        placeholder="Enter your facebook account"
                    />
                </div>
                <div className="mb-4">
                    <p className="dark:text-neutral-300 text-neutral-600 mb-1 text-sm">
                        Tell us something about yourself (Optional)
                    </p>
                    <Textarea
                        name="about-self"
                        placeholder="Type it here"
                        className="min-h-14"
                    />
                </div>

                <div className="mb-3 mt-8 border-t pt-6 dark:border-neutral-800">
                    <p className="dark:text-neutral-300 text-neutral-600 mb-1 text-sm">
                        Output Link (for photo/video applicants)
                    </p>
                    <Input
                        name="output-link"
                        placeholder="Paste your Google Drive link here."
                    />
                </div>
                <div className="mb-3">
                    <p className="dark:text-neutral-300 text-neutral-600 mb-1 text-sm">
                        Text Output
                    </p>
                    <Textarea
                        name="output"
                        className="min-h-40"
                        placeholder="Type or paste your output here"
                    />
                </div>

                <SubmitButton label="Apply Now" containerStyle="mt-8 w-full" />

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
