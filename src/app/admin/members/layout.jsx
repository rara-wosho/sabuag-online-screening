import MemberSearchForm from "@/components/MemberSearchForm";

export default function MembersLayout({ children }) {
    return (
        <div>
            <div className="mb-3">
                <MemberSearchForm />
            </div>
            {children}
        </div>
    );
}
