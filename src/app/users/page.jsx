import { supabaseAdmin } from "@/utils/supabase/admin";

async function UsersPage() {
    const {
        data: { users },
    } = await supabaseAdmin.auth.admin.listUsers();

    console.log(users);

    return (
        <div>
            <h1 className="text-3xl">Users List</h1>
            <ul className="mt-4 border border-neutral-800 p-3">
                {users.map((user) => (
                    <li key={user.id}>{user.email}</li>
                ))}
            </ul>
        </div>
    );
}

export default UsersPage;
