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

    revalidatePath("/admin/positions", "page");
}

export async function updatePosition(formData) {
    const title = formData.get("title");
    const description = formData.get("description");
    const is_open = formData.get("is_open");
    const id = formData.get("id");

    const supabase = await createClient();
    const { error } = await supabase
        .from("positions")
        .update({ title, description, is_open })
        .eq("id", id);

    if (error) {
        console.log("error : ", error.message);
        return;
    }

    revalidatePath("/admin/positions", "page");
}
