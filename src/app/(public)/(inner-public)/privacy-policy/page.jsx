import PrimaryLabel from "@/components/ui/PrimaryLabel";
import {
    CircleCheckBig,
    Database,
    Eye,
    Handshake,
    Mail,
    Shield,
    TriangleAlert,
    UserCheck,
    Users,
} from "lucide-react";

export default function Page() {
    return (
        <div className="min-h-screen mx-auto max-w-[900px] gap-y-8 flex flex-col mb-8">
            <div className="mt-4">
                <div className="flex items-center gap-3 mb-2">
                    <div className="icon-wrapper rounded-md bg-red-500/10 p-2 text-destructive">
                        <Shield />
                    </div>
                    <h1 className="font-bold text-2xl">Privacy Policy</h1>
                </div>
                <div className="inline-flex items-center py-1 px-2 bg-green-500/10 rounded">
                    <p className="font-semibold text-sm dark:text-green-400 text-green-800">
                        Last updated: August 9, 2025
                    </p>
                </div>
            </div>

            <div className="bg-white dark:bg-violet-700/10 border-s-3 border-s-violet-600 shadow p-4">
                <p className="md:text-lg">
                    Your privacy is important to us. This Privacy Policy
                    explains how we collect, use, and protect your personal
                    information when you use SABUAG website.
                </p>
            </div>

            <div className="p-8 bg-white dark:bg-card border dark:border-neutral-800 rounded-lg">
                <PrimaryLabel className="flex items-center gap-2">
                    <Database className="text-pink-600" size={20} />
                    <span>Informations We Collect</span>
                </PrimaryLabel>

                <p className="mb-2">We May Collect:</p>

                <ul className="list-disc ps-4 flex flex-col text-neutral-600 dark:text-neutral-400">
                    <li className="text-sm mb-2">
                        Personal details you provide (such as name, email, and
                        phone number).
                    </li>
                    <li className="text-sm mb-2">
                        Files or links you submit (such as Google Drive links
                        for your application).
                    </li>
                </ul>
            </div>
            <div className="p-8 bg-white dark:bg-card border dark:border-neutral-800 rounded-lg">
                <PrimaryLabel className="flex items-center gap-2">
                    <Eye className="text-blue-600" size={20} />
                    <span>How We Use Your Information</span>
                </PrimaryLabel>

                <p className="mb-2">We Use Your Information to:</p>

                <ul className="list-disc ps-4 flex flex-col text-neutral-600 dark:text-neutral-400">
                    <li className="text-sm mb-2">
                        Process applications or service requests.
                    </li>
                    <li className="text-sm mb-2">
                        Improve and personalize your experience.
                    </li>
                    <li className="text-sm mb-2">
                        Communicate updates, announcements, or important
                        notices.
                    </li>
                </ul>
            </div>
            <div className="p-8 bg-white dark:bg-card border dark:border-neutral-800 rounded-lg">
                <PrimaryLabel className="flex items-center gap-2">
                    <UserCheck className="text-yellow-600" size={20} />
                    <span>Your Privacy Rights</span>
                </PrimaryLabel>

                <p className="mb-2">You have the right to:</p>

                <ul className="list-disc ps-4 flex flex-col text-neutral-600 dark:text-neutral-400">
                    <li className="text-sm mb-2">
                        Access the personal data we hold about you.
                    </li>
                    <li className="text-sm mb-2">
                        Request corrections or deletions.
                    </li>
                    <li className="text-sm mb-2">
                        Withdraw consent for certain uses.
                    </li>
                </ul>
            </div>
            <div className="p-8 bg-white dark:bg-card border dark:border-neutral-800 rounded-lg">
                <PrimaryLabel className="flex items-center gap-2">
                    <Mail className="text-blue-600" size={20} />
                    <span>Contact Information</span>
                </PrimaryLabel>

                <p>
                    If you have questions about this Privacy Policy, contact us
                    at sabuag-panaon@ustp.edu.ph
                </p>
            </div>

            <div className="bg-white dark:bg-sky-600/10 border-s-3 border-s-sky-600 shadow p-4">
                <p className="md:text-lg flex items-center mb-2 gap-2">
                    Changes to This Privacy Policy
                </p>

                <p className="text-sm">
                    We may update this Privacy Policy from time to time. The
                    updated version will be posted on this page with a new “Last
                    updated” date.
                </p>
            </div>

            <div className="py-8 border-t dark:border-neutral-800">
                <p className="text-center text-sm text-neutral-700 dark:text-neutral-400">
                    This privacy policy is part of our commitment to
                    transparency and data protection. For more information, see
                    our Terms and Conditions.
                </p>
            </div>
        </div>
    );
}
