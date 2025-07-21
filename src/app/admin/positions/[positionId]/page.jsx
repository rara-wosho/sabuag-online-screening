import ApplicationCard from "@/components/ui/applicationCard";
import BackButton from "@/components/ui/BackButton";
import PrimaryLabel from "@/components/ui/PrimaryLabel";
import { createClient } from "@/utils/supabase/server";
import { ChevronLeft } from "lucide-react";

export default async function Page({ params }) {
    await new Promise((res) => setTimeout(res, 5000));
    const { positionId } = await params;

    const supabase = await createClient();

    const { data: position, errorPosition } = await supabase
        .from("positions")
        .select()
        .single()
        .eq("id", positionId);

    if (errorPosition) {
        throw new Error("Cannot fetch data");
    }

    const { data: applicants, errorApplicant } = await supabase
        .from("applicants")
        .select()

        .eq("position_id", positionId);

    return (
        <div>
            <div className="flex items-center mb-4">
                <BackButton containerStyle="text-sm flex items-center gap-1">
                    <ChevronLeft size={18} /> <span>Back</span>
                </BackButton>
            </div>
            <div className="mb-4 pb-4 border-b dark:border-neutral-900">
                <h1 className="text-3xl  mb-1 font-semibold">
                    {position.title}
                </h1>
                <p className="text-sm dark:text-neutral-400">
                    {position.description}
                </p>
            </div>
            <PrimaryLabel>Applicants</PrimaryLabel>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {applicants.map((applicant) => (
                    <ApplicationCard
                        key={applicant.id}
                        applicantData={applicant}
                    />
                ))}
            </div>
        </div>
    );
}
