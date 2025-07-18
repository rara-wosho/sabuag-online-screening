export default async function ApplicationDetails({ params }) {
    const { applicationId } = await params;

    return <div>application id : {applicationId}</div>;
}
