// import { createServerClient } from "@supabase/ssr";
// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
// const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// export const createClient = (cookieStore) => {
//     return createServerClient(supabaseUrl, supabaseKey, {
//         cookies: {
//             getAll() {
//                 return cookieStore.getAll();
//             },
//             setAll(cookiesToSet) {
//                 try {
//                     cookiesToSet.forEach(({ name, value, options }) =>
//                         cookieStore.set(name, value, options)
//                     );
//                 } catch {
//                     // The `setAll` method was called from a Server Component.
//                     // This can be ignored if you have middleware refreshing
//                     // user sessions.
//                 }
//             },
//         },
//     });
// };

// new code from deepseek
// import { cookies } from "next/headers";

// export const createClient = () => {
//     const cookieStore = cookies(); // Get cookies from Next.js headers

//     return createServerClient(
//         process.env.NEXT_PUBLIC_SUPABASE_URL,
//         process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
//         {
//             cookies: {
//                 get(name) {
//                     return cookieStore.get(name)?.value;
//                 },
//                 set(name, value, options) {
//                     try {
//                         cookieStore.set({ name, value, ...options });
//                     } catch (err) {
//                         console.error("Failed to set cookie:", err);
//                     }
//                 },
//                 remove(name, options) {
//                     try {
//                         cookieStore.set({ name, value: "", ...options });
//                     } catch (err) {
//                         console.error("Failed to remove cookie:", err);
//                     }
//                 },
//             },
//         }
//     );
// };

// FROM SUPABASE DOCS
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function createClient() {
    const cookieStore = await cookies();

    return createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        {
            cookies: {
                getAll() {
                    return cookieStore.getAll();
                },
                setAll(cookiesToSet) {
                    try {
                        cookiesToSet.forEach(({ name, value, options }) =>
                            cookieStore.set(name, value, options)
                        );
                    } catch {
                        // The `setAll` method was called from a Server Component.
                        // This can be ignored if you have middleware refreshing
                        // user sessions.
                    }
                },
            },
        }
    );
}
