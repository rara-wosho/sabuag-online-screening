import FaqSection from "@/components/Sections/FaqSection";
import GoalSection from "@/components/Sections/GoalSection";
import HeroSection from "@/components/Sections/HeroSection";
import InviteSection from "@/components/Sections/InviteSection";
import MeetTheTeam from "@/components/Sections/MeetTheTeam";

export default function RootPage() {
    return (
        <div className="relative isolate">
            <div className="w-[30rem] aspect-square bg-accent/35 dark:bg-accent/10 rotate-45 fixed -left-[25rem] -z-10 -top-[6rem]"></div>
            <div className="w-[30rem] aspect-square bg-accent/35 dark:bg-accent/10 rotate-45 fixed -left-[20rem] -z-10 -top-[6rem]"></div>
            <div className="w-[30rem] aspect-square bg-accent/35 dark:bg-accent/5 rotate-45 fixed -left-[15rem] -z-10 -top-[6rem]"></div>
            <div className="w-[30rem] aspect-square bg-accent/35 dark:bg-accent/10 rotate-45 fixed -right-[20rem] -z-10 -bottom-[10rem]"></div>
            <div className="w-[30rem] aspect-square bg-accent/35 dark:bg-accent/10 rotate-45 fixed -right-[15rem] -z-10 -bottom-[10rem]"></div>
            <div className="w-[30rem] aspect-square bg-accent/35 dark:bg-accent/5 rotate-45 fixed -right-[10rem] -z-10 -bottom-[10rem]"></div>
            <HeroSection />
            <MeetTheTeam />
            <FaqSection />
            <InviteSection />
            {/* <GoalSection />  */}
        </div>
    );
}
