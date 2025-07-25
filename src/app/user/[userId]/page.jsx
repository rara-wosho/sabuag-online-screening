import { createClient } from "@/utils/supabase/server";
import { notFound } from "next/navigation";

export default async function ProfilePage({ params }) {
    const { userId } = await params;

    const db = await createClient();

    const { data, error } = await db
        .from("users")
        .select()
        .single()
        .eq("id", userId);

    const {
        data: { user },
    } = await db.auth.getUser();

    if (user.id !== data.id) {
        notFound();
    }

    return <div>Profile page</div>;
}
