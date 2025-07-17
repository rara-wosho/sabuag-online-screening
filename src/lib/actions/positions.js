"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function deletePosition(id) {
    const supabase = await createClient();

    const { error } = await supabase
        .from("positions")
        .delete()
        .eq("id", id)
        .select();

    if (error) {
        return { failed: true, message: "Unable to delete the position." };
    }

    revalidatePath("/admin/positions");
}

export async function updatePosition({
    this_id,
    this_title,
    this_description,
    this_is_open,
}) {
    const supabase = await createClient();

    const { error } = await supabase
        .from("positions")
        .update({
            title: this_title,
            description: this_description,
            is_open: this_is_open,
        })
        .eq("id", this_id);

    if (error) {
        return { success: false, message: error.message };
    }

    revalidatePath("/admin/positions", "page");
    return { success: true };
}
