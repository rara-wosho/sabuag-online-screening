import Image from "next/image";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import SubmitButton from "./ui/SubmitButton";

export default function ApplicationForm() {
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

            <p className="dark:text-neutral-400 text-sm">
                Please complete the form and upload a sample of your work. We’re
                excited to see what you’ve got!
            </p>
            <form action="" className="py-4">
                <div className="mb-3">
                    <p className="dark:text-neutral-300 text-neutral-600 mb-1 text-sm">
                        Full Name
                    </p>
                    <Input
                        required
                        name="full_name"
                        placeholder="Enter your full name"
                    />
                </div>

                <div className="mb-3">
                    <p className="dark:text-neutral-300 text-neutral-600 mb-1 text-sm">
                        Email
                    </p>
                    <Input
                        required
                        name="full_name"
                        placeholder="Enter your email"
                    />
                </div>

                <div className="mb-4">
                    <p className="dark:text-neutral-300 text-neutral-600 mb-1 text-sm">
                        Facebook
                    </p>
                    <Input
                        required
                        name="full_name"
                        placeholder="Enter your facebook account"
                    />
                </div>

                <div className="mb-3 mt-6 border-t pt-4">
                    <p className="dark:text-neutral-300 text-neutral-600 mb-1 text-sm">
                        Output Link (for photo/video applicants)
                    </p>
                    <Input
                        required
                        name="full_name"
                        placeholder="Paste your Google Drive link here."
                    />
                </div>
                <div className="mb-3">
                    <p className="dark:text-neutral-300 text-neutral-600 mb-1 text-sm">
                        Text Output
                    </p>
                    <Textarea
                        required
                        name="full_name"
                        placeholder="You can paste your text output here, if there is."
                    />
                </div>

                <SubmitButton
                    label="Submit Application"
                    containerStyle="mt-8 w-full"
                />
            </form>
        </div>
    );
}
