import SearchForm from "@/components/SearchForm";

export default function Layout({ children }) {
    return (
        <div>
            {/* applications search bar  */}
            <div className="flex items-center mb-4 gap-2">
                <SearchForm />
            </div>
            {children}
        </div>
    );
}
