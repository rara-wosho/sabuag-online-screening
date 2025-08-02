import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

// an api for uptime robot to send request to
//making the supabase free tier project active
export async function GET() {
    try {
        const supabase = await createClient();

        const { count, error } = await supabase
            .from("users")
            .select("*", { count: "exact", head: true }); // only counts rows, no data returned

        if (error) throw error;

        return NextResponse.json({
            status: "ok",
            message: "Supabase project kept alive ✅",
            rowCount: count ?? 0,
            timestamp: new Date().toISOString(),
        });
    } catch (err) {
        return NextResponse.json(
            {
                status: "error",
                message: err.message,
                timestamp: new Date().toISOString(),
            },
            { status: 500 }
        );
    }
}
