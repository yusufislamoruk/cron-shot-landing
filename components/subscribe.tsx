"use client";

import { useRef } from "react";

export default function SubscribeForm() {
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formRef.current) return;

        const email = formRef.current.newsletter.value;

        try {
            const res = await fetch("/api/email", {
                body: JSON.stringify({
                    email,
                    type: "subscribe",
                }),
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
            })
            const result = await res.text();
            alert(result);
        }
        catch (error) {
            console.error(error);
            alert("An error occurred, if this persists, please contact us directly at support@cronshot.io");
        }
    };
    return (
        <form ref={formRef} onSubmit={handleSubmit}>
            <div className="flex flex-wrap mb-4">
                <div className="w-full">
                    <label className="block text-sm sr-only" htmlFor="newsletter">
                        Email
                    </label>
                    <div className="relative flex items-center w-full">
                        <input
                            className="w-full text-gray-800 px-3 py-3 pr-12 text-sm border border-gray-300 rounded-md bg-white outline-none focus:border-gray-600"
                            id="newsletter"
                            type="email"
                            placeholder="Your email"
                            required
                        />
                        <button type="submit"
                            className="absolute inset-0 left-auto"
                            aria-label="subscribe"
                        >
                            <span
                                className="absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-300"
                                aria-hidden="true"
                            ></span>
                            <svg
                                className="w-3 h-3 fill-current text-blue-600 mx-3 shrink-0"
                                viewBox="0 0 12 12"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                                    fillRule="nonzero"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}