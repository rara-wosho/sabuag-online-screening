import { createClient } from "@/utils/supabase/server";

export default async function ProfilePage() {
    const db = await createClient();

    const { data, error } = await db.from("users").select();

    return <div></div>;
}
