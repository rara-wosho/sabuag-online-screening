import BackButton from "@/components/ui/BackButton";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
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
        const acceptApplication = formData.get("acceptApplication") == "yes";

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
                    <Input required name="title" placeholder="Position Title" />
                </div>

                <div className="mb-6">
                    <p className="text-sm mb-2">Description</p>
                    <Textarea name="description" placeholder="Description" />
                </div>
                <div className="mb-3">
                    <Select name="acceptApplication" defaultValue="yes">
                        <p className="mb-2">Accept applicants?</p>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Accept applicants" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="yes">Accept</SelectItem>
                            <SelectItem value="no">Do not accept</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-3.5 flex-col-reverse">
                    <BackButton
                        label="Back"
                        containerStyle="rounded border border-neutral-300 dark:border-neutral-600 px-4 py-2 cursor-pointer"
                    />
                    <SubmitButton label="Create Position" />
                </div>
            </form>
        </div>
    );
}
