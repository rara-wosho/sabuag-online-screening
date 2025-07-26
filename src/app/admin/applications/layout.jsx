import { Input } from "@/components/ui/input";
import SubmitButton from "@/components/ui/SubmitButton";
import Form from "next/form";

export default async function Layout({ children, searchParams }) {
    const search = (await searchParams)?.search || "";

    return (
        <div>
            {/* applications search bar  */}
            <div className="flex items-center mb-4 gap-2">
                <Form
                    action={`/admin/applications/results`}
                    className="flex w-full items-center ms-auto gap-2"
                >
                    <Input
                        name="search"
                        type="search"
                        placeholder="Search applicant"
                        className="w-full"
                        defaultValue={search}
                    />
                    <SubmitButton size="sm" label="Search" />
                </Form>
            </div>
            {children}
        </div>
    );
}
