import BackButton from "@/components/ui/BackButton";
import { Input } from "@/components/ui/input";
import SubmitButton from "@/components/ui/SubmitButton";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default function NewPosition() {
    async function createPosition(formData) {
        "use server";

        const supabase = await createClient();

        const title = formData.get("title")?.toString();
        const description = formData.get("description")?.toString();
        const acceptApplication = formData.get("acceptApplication");

        const { data, error } = await supabase
            .from("positions")
            .insert({ title, description, is_open: acceptApplication });

        if (error) {
            throw new Error("error", error.message);
        }

        redirect("/admin/positions");
    }
    return (
        <div className="flex justify-center">
            <form action={createPosition} className="w-full max-w-[550px]">
                <h1 className="text-xl mb-3 font-bold">New Position</h1>

                <div className="mb-3">
                    <p className="text-sm mb-2">Title</p>
                    <Input name="title" placeholder="Position Title" />
                </div>

                <div className="mb-6">
                    <p className="text-sm mb-2">Description</p>
                    <Textarea name="description" placeholder="Description" />
                </div>
                <div className="mb-3 flex items-center gap-3">
                    <Switch name="acceptApplication" />
                    <p className="text-sm">Accept applicants</p>
                </div>

                <em className="text-sm dark:text-neutral-500 text-neutral-400">
                    Toggle to mark if this position is currently accepting
                    applicants
                </em>

                <div className="mt-8 flex justify-end gap-2">
                    <BackButton
                        label="Cancel"
                        containerStyle="rounded border border-neutral-300 dark:border-neutral-600 px-4 cursor-pointer"
                    />
                    <SubmitButton label="Create Position" />
                </div>
            </form>
        </div>
    );
}
