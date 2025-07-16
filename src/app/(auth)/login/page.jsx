import SubmitButton from "@/components/ui/SubmitButton";
import { createUser, login } from "@/lib/actions/auth";

import Form from "next/form";
import Link from "next/link";

export default function Page() {
    return (
        <div>
            <h1 className="text-3xl">Login Page</h1>
            <Link href="/sign-up">Sign Up</Link>

            <form action={login} className="flex flex-col gap-3 w-2xl mt-4">
                <input
                    placeholder="email"
                    type="text"
                    name="email"
                    className="border p-2"
                />
                <input
                    placeholder="password"
                    type="text"
                    name="password"
                    className="border p-2"
                />
                <SubmitButton />
            </form>
        </div>
    );
}
