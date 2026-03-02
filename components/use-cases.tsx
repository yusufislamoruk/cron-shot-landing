"use client";

import { useState } from "react";
import React from "react";
type UseCase = {
    title: string;
    description: string;
    url: string;
    image: React.JSX.Element;
}
export const useCases: UseCase[] = [
    {
        title: "Content Verification",
        description: "Show advertisers that you've corretly shared their sponsored posts on your site.Taking daily screenshot of these posts helps prove this.",
        url: "/use-case/content-verification",
        image: (<svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-12 h-12 p-1 -mt-1 mb-2 text-blue-600 fill-current"
        >
            <path d="M152.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 113C-2.3 103.6-2.3 88.4 7 79s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM224 96c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-17.7 0-32-14.3-32-32zM48 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
        </svg>),
    },
    {
        title: "Competition Tracking",
        description: "Monitor your competitors' websites and stay well informed about their changes. Daily screenshots can help you track their progress.",
        url: "/use-case/competition-tracking",
        image: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-12 h-12 p-1 -mt-1 mb-2 text-blue-600 fill-current"
            >
                <path d="M128 32h32c17.7 0 32 14.3 32 32V96H96V64c0-17.7 14.3-32 32-32zm64 96V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V388.9c0-34.6 9.4-68.6 27.2-98.3C40.9 267.8 49.7 242.4 53 216L60.5 156c2-16 15.6-28 31.8-28H192zm227.8 0c16.1 0 29.8 12 31.8 28L459 216c3.3 26.4 12.1 51.8 25.8 74.6c17.8 29.7 27.2 63.7 27.2 98.3V448c0 17.7-14.3 32-32 32H352c-17.7 0-32-14.3-32-32V128h99.8zM320 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32V96H320V64zm-32 64V288H224V128h64z" />
            </svg>
        ),
    },
    {
        title: "Seo Monitoring",
        description: "Track your website's SEO performance and monitor changes from rankings to snippets.",
        url: "/use-case/seo-monitoring",
        image: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-12 h-12 p-1 -mt-1 mb-2 text-blue-600 fill-current"
            >
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
        ),
    },
    {
        title: "Brand Management",
        description: "Ensure that your website is displaying your brand correctly and consistently.",
        url: "/use-case/brand-management",
        image: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="w-12 h-12 p-1 -mt-1 mb-2 text-blue-600 fill-current"
            >
                <path d="M297.2 248.9C311.6 228.3 320 203.2 320 176c0-70.7-57.3-128-128-128S64 105.3 64 176c0 27.2 8.4 52.3 22.8 72.9c3.7 5.3 8.1 11.3 12.8 17.7l0 0c12.9 17.7 28.3 38.9 39.8 59.8c10.4 19 15.7 38.8 18.3 57.5H109c-2.2-12-5.9-23.7-11.8-34.5c-9.9-18-22.2-34.9-34.5-51.8l0 0 0 0c-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176c0 37.3-11.6 71.9-31.4 100.3c-5 7.2-10.2 14.3-15.4 21.4l0 0 0 0c-12.3 16.8-24.6 33.7-34.5 51.8c-5.9 10.8-9.6 22.5-11.8 34.5H226.4c2.6-18.7 7.9-38.6 18.3-57.5c11.5-20.9 26.9-42.1 39.8-59.8l0 0 0 0 0 0c4.7-6.4 9-12.4 12.7-17.7zM192 128c-26.5 0-48 21.5-48 48c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16s-7.2 16-16 16zm0 384c-44.2 0-80-35.8-80-80V416H272v16c0 44.2-35.8 80-80 80z" />
            </svg>
        ),
    },
    {
        title: "Trend Tracking",
        description:
            "Monitor trends and changes in any industry. Leaderboards, rankings, and more.",
        url: "/use-case/trend-tracking",
        image: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="w-12 h-12 p-1 -mt-1 mb-2 text-blue-600 fill-current"
            >
                <path d="M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32H544c17.7 0 32 14.3 32 32V288c0 17.7-14.3 32-32 32s-32-14.3-32-32V205.3L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160H384z" />
            </svg>
        ),
    },
    {
        title: "Website Compliance",
        description:
            "Websites and social media channels are considered official publications. Ensure that your website is compliant with regulations.",
        url: "/use-case/website-compliance",
        image: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="w-12 h-12 p-1 -mt-1 mb-2 text-blue-600 fill-current"
            >
                <path d="M128 32C92.7 32 64 60.7 64 96V352h64V96H512V352h64V96c0-35.3-28.7-64-64-64H128zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480H563.2c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2H19.2z" />
            </svg>
        ),
    },
];
export default function UseCases() {
    const [selectedUseCase, setSelectedUseCase] = useState<UseCase>(useCases[0]);

    const selectUseCase = (useCase: UseCase) => {
        setSelectedUseCase(useCase);
    };

    return (
        <section className="relative bg-gray-50">
            <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2 z-10"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20">
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h2 className="text-3xl md:text-3xl font mb-4 font-bold">Use cases for automated website <br />screenshots</h2>
                    </div>

                    <div className="mb-12 md:mb-16">
                        <ul className="flex flex-wrap justify-center text-sm font-medium -m-2">
                            {useCases.map((useCase) => (
                                <li key={useCase.title} className="m-2">
                                    <button
                                        type="button"
                                        className={`inline-flex text-center py-2 px-4 rounded-full ${selectedUseCase === useCase
                                            ? "bg-blue-600 text-white"
                                            : "bg-white text-gray-800 shadow-sm hover:bg-gray-100 cursor-pointer"
                                            } transition duration-150 ease-in-out`}
                                        onClick={() => selectUseCase(useCase)}
                                    >
                                        {useCase.title}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative flex flex-col items-start p-10 pt-15 bg-white rounded shadow-xl">
                        {selectedUseCase.image}
                        <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-center">
                            {selectedUseCase.title}
                        </h4>
                        <p className="text-gray-600 text-center">
                            {selectedUseCase.description}
                        </p>

                        <div className="pt-7">
                            <a
                                className="btn text-white bg-gray-900 hover:bg-gray-800 
                                px-7 py-3.5 border-none rounded-sm"
                                href={`${selectedUseCase.url}`}
                                aria-label={`Learn more about ${selectedUseCase.title}`}
                            >
                                Learn more
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
