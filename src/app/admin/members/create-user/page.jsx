import FormLabel from "@/components/FormLabel";
import BackButton from "@/components/ui/BackButton";
import { Input } from "@/components/ui/input";
import SubmitButton from "@/components/ui/SubmitButton";
import { createUserWithAdmin } from "@/lib/actions/auth";
import { ChevronLeft } from "lucide-react";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import Form from "next/form";

export default function Page() {
    return (
        <div className="flex flex-col items-center mb-20">
            <div className="w-full mb-3">
                <BackButton containerStyle="flex items-center gap-1 duration-200 transition-colors hover:text-accent-foreground">
                    <ChevronLeft size={18} /> Back
                </BackButton>
            </div>
            <Form action={createUserWithAdmin} className="w-full max-w-[500px]">
                <h1 className="text-xl mb-3 font-bold">Add New Member</h1>

                <div className="mb-3">
                    <FormLabel required label="First Name" />
                    <Input
                        required
                        name="firstname"
                        placeholder="Enter First Name"
                    />
                </div>
                <div className="mb-3">
                    <FormLabel label="Middle Name" />
                    <Input
                        name="middlename"
                        placeholder="Enter Middle Name (Optional)"
                    />
                </div>
                <div className="mb-3">
                    <FormLabel required label="Last Name" />
                    <Input
                        required
                        name="lastname"
                        placeholder="Enter Last Name"
                    />
                </div>
                <div className="mb-3">
                    <Select name="role" defaultValue="user">
                        <p className="mb-2">Role</p>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="User" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="user">User</SelectItem>
                            <SelectItem value="admin">Admin</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <h4 className="font-semibold mb-2 mt-3 pt-3">Credentials</h4>
                <div className="mb-3">
                    <FormLabel required label="Email" />
                    <Input
                        required
                        name="email"
                        placeholder="Enter a valid email address"
                        type="email"
                    />
                </div>
                <div className="mb-3">
                    <FormLabel label="Password" />
                    <p className="text-xs mb-2 text-neutral-700 dark:text-neutral-400">
                        Default password is 's@buagpassword'
                    </p>
                    <Input
                        name="password"
                        placeholder="minimum of 6 characters"
                        type="password"
                    />
                </div>

                <SubmitButton label="Add Now" containerStyle="mt-8 w-full" />
            </Form>
        </div>
    );
}
