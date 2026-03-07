"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function MobileMenu() {
    const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

    const trigger = useRef<HTMLButtonElement>(null);
    const mobileNav = useRef<HTMLDivElement>(null);

    // close the mobile menu on click outside
    useEffect(() => {
        const clickHandler = ({ target }: { target: EventTarget | null }): void => {
            if (!mobileNav.current || !trigger.current) return;
            if (
                !mobileNavOpen ||
                mobileNav.current.contains(target as Node) ||
                trigger.current.contains(target as Node)
            )
                return;
            setMobileNavOpen(false);
        };
        document.addEventListener("click", clickHandler);
        return () => document.removeEventListener("click", clickHandler);
    });

    // close the mobile menu if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({ keyCode }: { keyCode: number }): void => {
            if (!mobileNavOpen || keyCode !== 27) return;
            setMobileNavOpen(false);
        };
        document.addEventListener("keydown", keyHandler);
        return () => document.removeEventListener("keydown", keyHandler);
    });

    return (
        <div className="flex md:hidden">
            <button
                ref={trigger}
                className={`hamburger ${mobileNavOpen && "active"}`}
                aria-controls="mobile-nav"
                aria-expanded={mobileNavOpen}
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
                <span className="sr-only">Menu</span>
                <svg
                    className="w-6 h-6 fill-current text-gray-900"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect y="4" width="24" height="2" />
                    <rect y="11" width="24" height="2" />
                    <rect y="18" width="24" height="2" />
                </svg>
            </button>

            {/*Mobile navigation */}
            <div
                ref={mobileNav}
                className={`absolute top-full left-0 w-full bg-white shadow-lg border-b border-gray-200 transition-all duration-300 ease-in-out origin-top ${mobileNavOpen ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-0 pointer-events-none"
                    }`}
            >
                <ul className="px-5 py-4 max-h-[calc(100vh-80px)] overflow-y-auto">
                    <li className="py-2 my-2 border-t border-b border-gray-200">
                        <span
                            className="flex text-gray-600 hover:text-gray-900 py-2"
                            onClick={() => setMobileNavOpen(false)}
                        >
                            Use Cases
                        </span>
                        <ul className="pl-4">
                            <li>
                                <Link
                                    href="/use-case/content-verification"
                                    className="text-sm flex font-medium text-gray-600 hover:text-gray-900 py-2"
                                    onClick={() => setMobileNavOpen(false)}
                                >
                                    Content Verification
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/use-case/competition-tracking"
                                    className="text-sm flex font-medium text-gray-600 hover:text-gray-900 py-2"
                                    onClick={() => setMobileNavOpen(false)}
                                >
                                    Competition Tracking
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/use-case/seo-monitoring"
                                    className="text-sm flex font-medium text-gray-600 hover:text-gray-900 py-2"
                                    onClick={() => setMobileNavOpen(false)}
                                >
                                    SEO Monitoring
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/use-case/brand-management"
                                    className="text-sm flex font-medium text-gray-600 hover:text-gray-900 py-2"
                                    onClick={() => setMobileNavOpen(false)}
                                >
                                    Brand Management
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/use-case/trend-tracking"
                                    className="text-sm flex font-medium text-gray-600 hover:text-gray-900 py-2"
                                    onClick={() => setMobileNavOpen(false)}
                                >
                                    Trend Tracking
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/use-case/website-compliance"
                                    className="text-sm flex font-medium text-gray-600 hover:text-gray-900 py-2"
                                    onClick={() => setMobileNavOpen(false)}
                                >
                                    Website Compliance
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link
                            href="/pricing"
                            className="flex text-gray-600 hover:text-gray-900 py-2"
                            onClick={() => setMobileNavOpen(false)}
                        >
                            Pricing
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/support"
                            className="flex text-gray-600 hover:text-gray-900 py-2"
                            onClick={() => setMobileNavOpen(false)}
                        >
                            Support
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/login"
                            className="flex font-medium w-full text-gray-600 hover:text-gray-900 py-2 justify-center"
                            onClick={() => setMobileNavOpen(false)}
                        >
                            Sign in
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/sign-up"
                            className="flex items-center justify-center gap-2 text-white bg-[#1C1C1E] hover:bg-[#2C2C2E] rounded-md px-6 py-3 font-medium w-full my-4 shadow-sm transition-colors"
                            onClick={() => setMobileNavOpen(false)}
                        >
                            <span>Sign up</span>
                            <span className="text-gray-400 ml-1">&rarr;</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}