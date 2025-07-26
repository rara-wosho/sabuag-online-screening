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

    if (error || data.id == null) {
        notFound();
    }

    const {
        data: { user },
    } = await db.auth.getUser();

    const isOwner = data.id === user.id;

    return <div>Profile page {isOwner ? "owner" : "not owner"}</div>;
}
