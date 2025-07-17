export default async function ApplicationDetails({ params }) {
    const { applicationId } = await params;

    return <div>{applicationId}</div>;
}
