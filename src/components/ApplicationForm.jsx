"use client";

import Image from "next/image";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import SubmitButton from "./ui/SubmitButton";
import { submitApplication } from "@/lib/actions/application-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function ApplicationForm({ positionId, position_name }) {
    const router = useRouter();

    const handleSubmit = async (formData) => {
        const fullname = formData.get("full-name").toString();
        const email = formData.get("email").toString();
        const facebook = formData.get("facebook").toString();
        const output = formData.get("output").toString();
        const output_link = formData.get("output-link").toString();

        const data = {
            fullname,
            email,
            facebook,
            output,
            output_link,
            positionId,
            position_name,
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
        <div className="p-3 md:p-4 rounded-lg dark:bg-card border dark:border-neutral-800 shadow-md bg-white">
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
            <form action={handleSubmit} className="py-4">
                <div className="mb-3">
                    <p className="dark:text-neutral-300 text-neutral-600 mb-1 text-sm">
                        Full Name
                    </p>
                    <Input
                        required
                        name="full-name"
                        placeholder="Enter your full name"
                    />
                </div>

                <div className="mb-3">
                    <p className="dark:text-neutral-300 text-neutral-600 mb-1 text-sm">
                        Email
                    </p>
                    <Input
                        required
                        name="email"
                        placeholder="Enter your email"
                    />
                </div>

                <div className="mb-4">
                    <p className="dark:text-neutral-300 text-neutral-600 mb-1 text-sm">
                        Facebook (Optional)
                    </p>
                    <Input
                        name="facebook"
                        placeholder="Enter your facebook account"
                    />
                </div>

                <div className="mb-3 mt-8 border-t pt-6 dark:border-neutral-800">
                    <p className="dark:text-neutral-300 text-neutral-600 mb-1 text-sm">
                        Output Link (for photo/video applicants)
                    </p>
                    <Input
                        required
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
                        placeholder="You can paste your text output here, if there is."
                    />
                </div>

                <SubmitButton label="Apply Now" containerStyle="mt-8 w-full" />
            </form>
        </div>
    );
}
