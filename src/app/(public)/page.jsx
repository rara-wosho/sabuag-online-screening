import FaqSection from "@/components/Sections/FaqSection";
import GoalSection from "@/components/Sections/GoalSection";
import HeroSection from "@/components/Sections/HeroSection";

export default function RootPage() {
    return (
        <div>
            <HeroSection />
            <GoalSection />
            <FaqSection />
        </div>
    );
}
