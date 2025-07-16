import { createClient } from "@/utils/supabase/server";

export default async function Page({ params }) {
    const { positionId } = await params;

    const supabase = await createClient();

    const { data: position, error } = await supabase
        .from("positions")
        .select()
        .eq("id", positionId);

    if (error) {
        throw new Error("Cannot fetch data");
    }

    return (
        <div>
            position ID : {positionId}
            {position.map((pos) => (
                <div key={pos.id}>
                    <p>{pos.title}</p>
                    <p>{pos.description}</p>
                </div>
            ))}
        </div>
    );
}
