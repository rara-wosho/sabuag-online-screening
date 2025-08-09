import PrimaryLabel from "@/components/ui/PrimaryLabel";
import {
    CircleCheckBig,
    Handshake,
    Mail,
    TriangleAlert,
    Users,
} from "lucide-react";

export default function Page() {
    return (
        <div className="min-h-screen mx-auto max-w-[900px] gap-y-8 flex flex-col mb-8">
            <div className="mt-4">
                <div className="flex items-center gap-3 mb-2">
                    <div className="icon-wrapper rounded-md bg-violet-500/10 p-2 text-primary">
                        <Handshake />
                    </div>
                    <h1 className="font-bold text-2xl">Terms and Conditions</h1>
                </div>
                <div className="inline-flex items-center py-1 px-2 bg-green-500/10 rounded">
                    <p className="font-semibold text-sm dark:text-green-400 text-green-800">
                        Last updated: August 9, 2025
                    </p>
                </div>
            </div>

            <div className="bg-white dark:bg-violet-700/10 border-s-3 border-s-violet-600 shadow p-4">
                <p className="md:text-lg">
                    Welcome to SABUAG official website. By accessing or using
                    our website and services, you agree to be bound by these
                    Terms and Conditions. If you do not agree, please do not use
                    our platform.
                </p>
            </div>
            <div className="bg-white dark:bg-yellow-600/10 border-s-3 border-s-yellow-600 shadow p-4">
                <p className="md:text-lg flex items-center mb-2 gap-2">
                    <TriangleAlert size={18} /> Compatibility Notice
                </p>

                <p className="text-sm">
                    Some user interface components may not function as intended
                    on older browsers, particularly Safari version 16 and below.
                    For the best experience, we recommend using the latest
                    version of Chrome, Firefox, Safari, or Edge.
                </p>
            </div>

            <div className="p-8 bg-white dark:bg-card border dark:border-neutral-800 rounded-lg">
                <PrimaryLabel className="flex items-center gap-2">
                    <CircleCheckBig className="text-green-600" size={20} />
                    <span>Acceptance of Terms</span>
                </PrimaryLabel>

                <p className="text-sm">
                    By creating an account, accessing our website, or using any
                    of our services, you acknowledge that you have read,
                    understood, and agree to be bound by these Terms and our
                    Privacy Policy.
                </p>
            </div>
            <div className="p-8 bg-white dark:bg-card border dark:border-neutral-800 rounded-lg">
                <PrimaryLabel className="flex items-center gap-2">
                    <Users className="text-green-600" size={20} />
                    <span>User Responsibilities</span>
                </PrimaryLabel>

                <p className="mb-2">Account Security</p>

                <ul className="list-disc ps-4 flex flex-col text-neutral-600 dark:text-neutral-400">
                    <li className="text-sm mb-2">
                        Maintain the confidentiality of your account credentials
                    </li>
                    <li className="text-sm mb-2">
                        Use strong, unique passwords for your account
                    </li>
                    <li className="text-sm mb-2">
                        Notify us immediately of any unauthorized access
                    </li>
                    <li className="text-sm mb-2">
                        Provide accurate and current information
                    </li>
                </ul>
                <p className="mb-2">Acceptable Use</p>

                <ul className="list-disc ps-4 flex flex-col text-neutral-600 dark:text-neutral-400">
                    <li className="text-sm mb-2">
                        Provide accurate and truthful information when
                        registering or submitting forms.
                    </li>
                    <li className="text-sm mb-2">
                        Use our platform only for lawful purposes.
                    </li>
                    <li className="text-sm mb-2">
                        Not attempt to disrupt, hack, or misuse any part of our
                        system.
                    </li>
                </ul>
            </div>

            <div className="p-8 bg-white dark:bg-card border dark:border-neutral-800 rounded-lg">
                <PrimaryLabel className="flex items-center gap-2">
                    <Mail className="text-blue-600" size={20} />
                    <span>Contact Information</span>
                </PrimaryLabel>

                <p>
                    If you have questions about our terms and conditions,
                    contact us at sabuag-panaon@ustp.edu.ph
                </p>
            </div>

            <div className="py-8 border-t dark:border-neutral-800">
                <p className="text-center text-sm text-neutral-700 dark:text-neutral-400">
                    These Terms of Service, together with our Privacy Policy,
                    constitute the complete agreement between you and Sabuag
                    regarding the use of our services.
                </p>
            </div>
        </div>
    );
}
