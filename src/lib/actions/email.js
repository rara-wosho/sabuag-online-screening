"use server";

import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

export async function sendNotificationEmail(applicantName) {
    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
        const { data, error } = await resend.emails.send({
            from: "Sabuag-Publication <onboarding@resend.dev>",
            to: ["deverinth88@gmail.com"],
            subject: "New Applicant",
            react: EmailTemplate({ applicantName }),
        });

        if (error) {
            return { success: false, error };
        }

        return { success: true };
    } catch (error) {
        return { success: false, error };
    }
}
