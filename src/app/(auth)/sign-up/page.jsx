import SubmitButton from "@/components/ui/SubmitButton";
import { createUser, deleteUser } from "@/lib/actions/auth";
import Form from "next/form";
import Link from "next/link";

export default function Page() {
    return (
        <div>
            <h1 className="text-3xl">Sign Up Page</h1>
            <Link href="/login">Login</Link>

            <Form
                action={deleteUser("5b021e80-6656-41f2-83d8-c06b7a86347d")}
                className="flex flex-col gap-3 w-2xl mt-4"
            >
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
            </Form>
        </div>
    );
}
