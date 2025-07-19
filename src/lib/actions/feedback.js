"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function submitFeedback(formData) {
    const db = await createClient();

    const rate = 1;

    const { error } = await db.from("feedbacks").insert({
        rate,
        feedback_message: formData.feedback_message,
        feedback_author: formData.feedback_author,
    });

    if (error) {
        return { success: false };
    }

    revalidatePath("/join", "page");
    return { success: true };
}
