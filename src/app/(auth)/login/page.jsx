"use client";

import FormLabel from "@/components/FormLabel";
import { Input } from "@/components/ui/input";
import SubmitButton from "@/components/ui/SubmitButton";
import { login } from "@/lib/actions/auth";
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
        <div>
            <h1 className="text-3xl">Login Page</h1>
            <Link href="/sign-up">Sign Up</Link>

            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-3 w-2xl mt-4"
            >
                <div>
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

                <div>
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
                <Link href="/forgot-password">Forgot Password?</Link>

                <SubmitButton label="Sign In" />
            </form>

            <Link href="/">Home</Link>
        </div>
    );
}
