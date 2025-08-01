"use client";

import FormLabel from "@/components/FormLabel";
import { Input } from "@/components/ui/input";
import SubmitButton from "@/components/ui/SubmitButton";
import { login } from "@/lib/actions/auth";
import { HomeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function Page() {
    const router = useRouter();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.email || !formData.password) {
            toast.error("Email and password are required");
            return;
        }

        try {
            const result = await login(formData);
            if (result.success) {
                router.replace("/admin");
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-3 relative isolate">
            <div className="w-[30rem] aspect-square opacity-90 dark:opacity-10 bg-accent dark:bg-accent rotate-45 fixed -left-[25rem] -z-10 -top-[6rem]"></div>
            <div className="w-[30rem] aspect-square opacity-40 dark:opacity-10 bg-accent dark:bg-accent rotate-45 fixed -left-[20rem] -z-10 -top-[6rem]"></div>
            <div className="w-[30rem] aspect-square opacity-40 dark:opacity-5 bg-accent dark:bg-accent rotate-45 fixed -left-[15rem] -z-10 -top-[6rem]"></div>
            <div className="w-[30rem] aspect-square opacity-90 dark:opacity-10 bg-accent dark:bg-accent rotate-45 fixed -right-[20rem] -z-10 -bottom-[10rem]"></div>
            <div className="w-[30rem] aspect-square opacity-40 dark:opacity-10 bg-accent dark:bg-accent rotate-45 fixed -right-[15rem] -z-10 -bottom-[10rem]"></div>
            <div className="w-[30rem] aspect-square opacity-40 dark:opacity-5 bg-accent dark:bg-accent rotate-45 fixed -right-[10rem] -z-10 -bottom-[10rem]"></div>

            {/* main content  */}
            <div className="wrapper flex flex-col items-center justify-center w-full bg-neutral-100 shadow dark:bg-card/30 border dark:border-neutral-800 max-w-[25rem] p-0 md:p-3 rounded-lg">
                <div className="bg-card w-full rounded-sm p-3 md:p-4">
                    <div className="img-wrapper w-16 mx-auto mb-2 aspect-square relative">
                        <Image
                            src="/official-sabuag.png"
                            alt="Official Sabuag"
                            fill
                            className="object-contain"
                        />
                    </div>

                    <h1 className="md:text-2xl text-lg text-center mb-1">
                        Welcome Back
                    </h1>

                    <p className="text-sm text-center text-neutral-600 dark:text-neutral-400">
                        Please enter your credentials to continue.
                    </p>

                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col mt-4 w-full  "
                    >
                        <div className="mb-3">
                            <FormLabel label="Email" />
                            <Input
                                placeholder="Enter email"
                                type="email"
                                name="email"
                                className="border p-2"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-2">
                            <FormLabel label="Password" />
                            <Input
                                placeholder="Enter password"
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="border p-2"
                                required
                            />
                        </div>
                        <Link
                            href="/forgot-password"
                            className="mb-4 text-sm text-neutral-600 dark:text-neutral-400 text-end"
                        >
                            Forgot Password?
                        </Link>

                        <SubmitButton label="Sign In" />
                    </form>
                </div>

                <Link
                    href="/"
                    className="pt-4 text-neutral-600 dark:text-neutral-400 pb-4 md:pb-1 text-center flex items-center gap-2"
                >
                    <HomeIcon size={15} /> Home
                </Link>
            </div>

            <p className="text-center text-neutral-600 dark:text-neutral-400 text-xs mt-4 translate-y-3">
                Proudly developed by{" "}
                <span className="text-neutral-800 dark:text-neutral-300">
                    Israel De Vera
                </span>
            </p>
        </div>
    );
}
