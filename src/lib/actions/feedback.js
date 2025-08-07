"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function submitFeedback(formData) {
    const db = await createClient();

    const { error } = await db.from("feedbacks").insert({
        rate: formData.rate,
        feedback_message: formData.feedback_message,
        feedback_author: formData.feedback_author,
    });

    if (error) {
        return { success: false };
    }

    revalidatePath("/join", "page");
    return { success: true };
}

export async function deleteFeedback(id) {
    const db = await createClient();

    const { error } = await db.from("feedbacks").delete().eq("id", id);

    if (error) {
        return {
            success: false,
            error: "Unable to delete feedback. Please make sure that you have a stable internet connection then try again.",
        };
    }

    revalidatePath("/admin/feedbacks", "page");
    return { success: true, error: null };
}
