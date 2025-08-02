import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

export default async function Page() {
    const supabase = await createClient();
    const { data: users, error } = await supabase.from("users").select();
    return (
        <div>
            Manage Members
            <Button asChild>
                <Link href="/admin/members/create-user">create New User</Link>
            </Button>
            {users.map((user) => (
                <p>{user.firstname}</p>
            ))}
        </div>
    );
}
