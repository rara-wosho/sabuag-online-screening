import MembersTable from "@/components/MembersTable";
import { createClient } from "@/utils/supabase/server";

export default async function Page() {
    const supabase = await createClient();
    const { data: users, error } = await supabase
        .from("users")
        .select()
        .order("lastname", { ascending: true });
    return (
        <div className="py-2">
            <MembersTable members={users} />
        </div>
    );
}
