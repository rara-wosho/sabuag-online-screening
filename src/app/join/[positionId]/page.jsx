export default async function Page({ params, searchParams }) {
    const { positionId } = await params;
    const { title } = await searchParams;
    return (
        <div className="pt-16 w-full max-w-[1200px] mx-auto">
            <div className="flex items-center py-4">
                <p className="text-2xl font-semibold">{title}</p>
            </div>
        </div>
    );
}
