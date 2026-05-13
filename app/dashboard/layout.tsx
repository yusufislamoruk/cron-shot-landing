"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import Logo from "@/components/ui/logo-02";
import { Menu, X, Link as LinkIcon, Camera, Clock } from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { href: "/dashboard", label: "Webpages", icon: LinkIcon },
        { href: "/dashboard/gallery", label: "Gallery", icon: Camera },
        { href: "/dashboard/scheduled-jobs", label: "Scheduled Jobs", icon: Clock },
    ];

    return (
        <div className="flex bg-[#0E121A] text-white fixed inset-0 z-[100]">
            {/* Desktop Sidebar */}
            <aside className="hidden md:flex w-64 border-r border-[#1F2937] bg-[#12161F] flex-col h-full">
                <div className="p-6 border-b border-[#1F2937] flex items-center h-16">
                    <Logo />
                </div>
                <nav className="flex-1 p-4 space-y-1">
                    <div className="text-xs font-semibold text-gray-500 mb-4 px-2 tracking-wider mt-2">
                        MENU
                    </div>
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-colors ${
                                    isActive
                                        ? "bg-[#242A38] text-white"
                                        : "text-gray-400 hover:bg-[#242A38] hover:text-white"
                                }`}
                            >
                                <link.icon size={18} />
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>
            </aside>

            {/* Mobile Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-50 md:hidden">
                    <div
                        className="absolute inset-0 bg-black/50"
                        onClick={() => setIsMenuOpen(false)}
                    />
                    <aside className="absolute left-0 top-0 bottom-0 w-64 bg-[#12161F] border-r border-[#1F2937] flex flex-col">
                        <div className="p-6 border-b border-[#1F2937] flex items-center justify-between h-16">
                            <Logo />
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="p-1 hover:bg-white/10 rounded"
                            >
                                <X size={20} />
                            </button>
                        </div>
                        <nav className="flex-1 p-4 space-y-1">
                            <div className="text-xs font-semibold text-gray-500 mb-4 px-2 tracking-wider mt-2">
                                MENU
                            </div>
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-colors ${
                                            isActive
                                                ? "bg-[#242A38] text-white"
                                                : "text-gray-400 hover:bg-[#242A38] hover:text-white"
                                        }`}
                                    >
                                        <link.icon size={18} />
                                        {link.label}
                                    </Link>
                                );
                            })}
                        </nav>
                    </aside>
                </div>
            )}

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-w-0 h-full">
                {/* Top Nav */}
                <header className="h-16 flex items-center px-4 sm:px-8 border-b border-[#1F2937] bg-[#0E121A] shrink-0">
                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className="md:hidden p-2 hover:bg-white/10 rounded mr-3"
                    >
                        <Menu size={22} />
                    </button>
                    <div className="text-sm font-medium text-gray-500 flex items-center gap-2">
                        <Link href="/dashboard" className="hover:text-gray-300">
                            Webpages
                        </Link>
                        <span className="hidden sm:inline">/</span>
                        <span className="hidden sm:inline text-gray-200">Configuration</span>
                    </div>
                    <div className="ml-auto flex items-center gap-4">
                        <UserButton />
                    </div>
                </header>

                {/* Page Content */}
                <div className="flex-1 overflow-auto bg-[#0E121A]">
                    {children}
                </div>
            </main>
        </div>
    );
}
