import { createClient } from "@/utils/supabase/client";
import { NextResponse } from "next/server";

export async function POST(req) {
    const supabase = createClient();

    const body = await req.json();

    const { status, applicationId } = body;

    const { error } = await supabase
        .from("applicants")
        .update({ status })
        .eq("id", applicationId);

    if (error) {
        return NextResponse.json({ success: false, error: error.message });
    }

    return NextResponse.json({ success: true, status });
}
