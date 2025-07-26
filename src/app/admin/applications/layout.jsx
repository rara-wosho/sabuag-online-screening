import SearchForm from "@/components/SearchForm";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";

export default function Layout({ children }) {
    const fallbackUi = (
        <div className="flex items-center gap-2">
            <Skeleton className="w-full h-8" />
            <Skeleton className="w-12 h-8" />
        </div>
    );
    return (
        <div>
            {/* applications search bar  */}
            <div className="flex items-center mb-4 gap-2">
                <Suspense fallback={fallbackUi}>
                    <SearchForm />
                </Suspense>
            </div>
            {children}
        </div>
    );
}
