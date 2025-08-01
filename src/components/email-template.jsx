import * as React from "react";

export function EmailTemplate({ applicantName }) {
    return (
        <div>
            <h2>📌 A new application has been submitted</h2>
            <h3>Hello Admin,</h3>
            <p>
                A new application from <strong>{applicantName}</strong> has just
                been submitted through the Sabuag platform. Please log in to
                your dashboard to review the details.
            </p>

            <br />
            <a href="https://sabuag-online-screening.vercel.app/admin/applications">
                View Application
            </a>
            <br />
            <p>
                If you did not expect this notification, you can safely ignore
                this message.
            </p>
            <br />
            <h5>
                Best regards,
                <br />
                <strong>Sabuag Team</strong>
            </h5>
        </div>
    );
}
