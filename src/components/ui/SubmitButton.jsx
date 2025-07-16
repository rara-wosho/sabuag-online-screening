"use client";

import { useFormStatus } from "react-dom";

const SubmitButton = ({ label }) => {
    const { pending } = useFormStatus();

    return (
        <button
            className="bg-emerald-600 flex justify-center py-1 px-4 text-white rounded cursor-pointer"
            type="submit"
        >
            {pending ? "Please wait..." : label}
        </button>
    );
};

export default SubmitButton;
