"use server";

import { supabaseAdmin } from "@/utils/supabase/admin";
import { revalidatePath } from "next/cache";

export async function updateUserStatus(selectedIds, status) {
    const { error } = await supabaseAdmin
        .from("users")
        .update({ status })
        .in("id", selectedIds);

    if (error) {
        return {
            success: false,
            error: "We're not able to update this user's status.",
        };
    }

    revalidatePath("/admin/members", "page");
    return { success: true, error: null };
}
