import { Frown, Laugh, Smile } from "lucide-react";

export default function WasThisHelpful() {
    return (
        <div className="border p-3 rounded-lg bg-card mt-8 text-neutral-400 flex flex-col items-center justify-center">
            <p className="text-[13px] mb-2">Was this helpful?</p>
            <div className="flex items-center">
                <div className="hover:bg-accent p-1 rounded-full cursor-pointer">
                    <Laugh size={18} className="text-pink-400" />
                </div>
                <div className="hover:bg-accent p-1 rounded-full cursor-pointer">
                    <Smile size={18} className="text-green-400" />
                </div>
                <div className="hover:bg-accent p-1 rounded-full cursor-pointer">
                    <Frown size={18} className="text-blue-400" />
                </div>
            </div>
        </div>
    );
}
