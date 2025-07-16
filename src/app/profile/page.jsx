import SubmitButton from "@/components/ui/SubmitButton";
import { logout } from "@/lib/actions/auth";

function ProfilePage() {
    return (
        <div>
            ProfilePage
            <form action={logout}>
                <SubmitButton />
            </form>
        </div>
    );
}

export default ProfilePage;
