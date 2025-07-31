"use server";

import { supabaseAdmin } from "@/utils/supabase/admin";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function login(formData) {
    const supabase = await createClient();

    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();

    if (!email || !password) {
        throw new Error("Email and password are required");
    }

    const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        console.error("Login error:", error.message);
        throw new Error("Invalid login credentials");
    }

    console.log("user sign in successfully");
    revalidatePath("/", "layout");
    redirect("/");
}

export async function createUser(formData) {
    const supabase = await createClient();

    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) {
        throw new Error("Email and password are required");
    }

    const { data, error } = await supabase.auth.signUp({
        email,
        password,
    });

    if (error) {
        console.error("Error creating user:", error.message);
        throw new Error(error.message);
    }

    // Optional: redirect after success
    console.log("Created user successfully");
    redirect("/profile");
}

export async function deleteUser(userId) {
    if (!userId) {
        throw new Error("User ID is required");
    }

    const { error } = await supabaseAdmin.auth.admin.deleteUser(userId);

    if (error) {
        console.error("Delete user error:", error.message);
        throw new Error("Failed to delete user");
    }

    // Optionally delete from profiles table
    // await supabaseAdmin.from("profiles").delete().eq("id", userId);

    return { success: true };
}

export async function logout(path) {
    const supabase = await createClient();
    const { error } = await supabase.auth.signOut({ scope: "local" });

    if (error) {
        console.error("Logout error:", error.message);
        throw new Error("Logout failed");
    }

    revalidatePath(path, "layout");
    redirect("/login");
}
