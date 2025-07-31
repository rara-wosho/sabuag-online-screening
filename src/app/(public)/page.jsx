import FaqSection from "@/components/Sections/FaqSection";
import GoalSection from "@/components/Sections/GoalSection";
import HeroSection from "@/components/Sections/HeroSection";
import InviteSection from "@/components/Sections/InviteSection";
import MeetTheTeam from "@/components/Sections/MeetTheTeam";

export default function RootPage() {
    return (
        <div className="relative isolate">
            <HeroSection />
            <MeetTheTeam />
            <FaqSection />
            <InviteSection />
            {/* <GoalSection />  */}
        </div>
    );
}
