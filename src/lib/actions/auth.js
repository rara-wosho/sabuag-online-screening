"use server";

import { supabaseAdmin } from "@/utils/supabase/admin";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function login(formData) {
    const supabase = createClient();
    // type-casting here for convenience
    // in practice, you should validate your inputs
    const cred = {
        email: formData.get("email"),
        password: formData.get("password"),
    };
    const { data, error } = await supabase.auth.signInWithPassword(cred);
    console.log(data);

    if (error) {
        console.log(error.message);
        redirect("/sign-up");
    }

    revalidatePath("/", "layout");
    redirect("/");
}

export async function logout() {
    const { error } = await supabase.auth.signOut();

    if (error) {
        redirect("/sign-up");
    }
}

export async function createUser(formData) {
    console.log("create user executed");
    const email = formData.get("email");
    const password = formData.get("password");
    if (!email || !password) {
        throw new Error("Email and password are required");
    }

    const { data, error } = await supabaseAdmin.auth.admin.createUser({
        email,
        password,
    });

    if (error) {
        console.error("Error creating user:", error.message);
        throw new Error(error.message); // Or redirect with error
    }

    // Optional: redirect after success
    console.log("redirect is reached");
    redirect("/profile"); // or wherever you want
}

export async function deleteUser(userId) {
    const { data, error } = await supabaseAdmin.auth.admin.deleteUser(
        "5b021e80-6656-41f2-83d8-c06b7a86347d"
    );
}
