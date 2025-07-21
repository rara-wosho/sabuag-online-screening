"use server";

import { createClient } from "@/utils/supabase/server";

export async function submitApplication(formData) {
    const db = await createClient();

    const { error } = await db.from("applicants").insert({
        fullname: formData.fullname,
        email: formData.email,
        facebook: formData.facebook,
        output: formData.output,
        output_link: formData.output_link,
        position_id: formData.positionId,
        position_name: formData.position_name,
        position_name: formData.position_name,
        about_self: formData.about_self,
        status: formData.status,
    });

    if (error) {
        console.log("error from use server: ", error.message);
        return { success: false };
    }

    return { success: true };
}
