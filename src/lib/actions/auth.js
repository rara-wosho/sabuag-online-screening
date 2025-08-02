"use server";

import { supabaseAdmin } from "@/utils/supabase/admin";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// server function
export async function login({ email, password }) {
    const supabase = await createClient();

    if (!email || !password) {
        throw new Error("Email and password are required");
    }

    const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        throw new Error("Invalid login credentials");
    }

    revalidatePath("/", "layout");
    return { success: true };
}

// registration logic for users
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

// create user with admin function
export async function createUserWithAdmin(formData) {
    const firstname = formData.get("firstname")?.toString().trim() || null;
    const middlename = formData.get("middlename")?.toString().trim() || "";
    const lastname = formData.get("lastname")?.toString().trim() || null;
    const email = formData.get("email")?.toString().trim() || null;
    const role = formData.get("role")?.toString().trim() || "user";
    const password = formData.get("password")?.toString() || "s@buagpassword"; // default password if admin did not put password

    if (!firstname) throw new Error("Firstname is required.");
    if (!lastname) throw new Error("Lastname is required.");
    if (!email) throw new Error("Email is required.");

    // 1. Create user in auth
    const { data, error } = await supabaseAdmin.auth.admin.createUser({
        email,
        password,
        email_confirm: true,
        user_metadata: { firstname, lastname, role },
    });

    if (error || !data?.user) {
        console.error("Auth create error:", error?.message);
        throw new Error("Something went wrong while creating user in auth.");
    }

    const userId = data.user.id;

    // 2. Insert into users table
    const { error: userError } = await supabaseAdmin.from("users").insert({
        id: userId,
        firstname,
        middlename,
        lastname,
        email,
        role,
    });

    if (userError) {
        console.error("DB insert error:", userError.message);
        // rollback: delete auth user to keep things consistent
        await supabaseAdmin.auth.admin.deleteUser(userId);

        throw new Error("Failed to insert user info into database.");
    }

    revalidatePath("/admin/members", "page");
    redirect("/admin/members");
}

// deleting a user from auth table
export async function deleteUser(userId) {
    if (!userId) {
        throw new Error("User ID is required");
    }

    const { error } = await supabaseAdmin.auth.admin.deleteUser(userId);

    if (error) {
        console.error("Delete user error:", error.message);
        throw new Error("Failed to delete user");
    }

    //delete from users table
    await supabaseAdmin.from("users").delete().eq("id", userId);

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

// update user role in user table and in user metadata
export async function updateUserRole(userId, newRole) {
    // 1. Update in your users table (source of truth)
    const { error: userError } = await supabaseAdmin
        .from("users")
        .update({ role: newRole })
        .eq("id", userId);

    if (userError) {
        console.error("DB update error:", userError.message);
        throw new Error("Failed to update role in users table.");
    }

    // 2. Update metadata in auth for convenience
    const { error: authError } = await supabaseAdmin.auth.admin.updateUserById(
        userId,
        {
            user_metadata: { role: newRole },
        }
    );

    if (authError) {
        console.error("Auth metadata update error:", authError.message);
        // not fatal, role is still correct in DB
    }

    return { success: true };
}
