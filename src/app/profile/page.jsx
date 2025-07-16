import { logout } from "@/lib/actions/auth";

function ProfilePage() {
    return (
        <div>
            ProfilePage
            <form action={logout}>Log Out</form>
        </div>
    );
}

export default ProfilePage;
