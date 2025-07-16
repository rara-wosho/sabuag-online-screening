"use client";

import { useFormStatus } from "react-dom";

const SubmitButton = () => {
    const { pending } = useFormStatus();

    return (
        <button
            className="bg-emerald-600 flex justify-center py-2 text-white"
            type="submit"
        >
            {pending ? "Submitting..." : "Submit"}
        </button>
    );
};

export default SubmitButton;
