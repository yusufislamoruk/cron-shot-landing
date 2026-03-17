import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';
import Logo from '@/components/ui/logo-02';
import { Link as LinkIcon, ChevronRight, Camera } from 'lucide-react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex bg-[#0E121A] text-white fixed inset-0 z-[100]">
            {/* Sidebar */}
            <aside className="w-64 border-r border-[#1F2937] bg-[#12161F] flex flex-col h-full">
                <div className="p-6 border-b border-[#1F2937] flex items-center h-16">
                    <Logo />
                </div>
                <nav className="flex-1 p-4 space-y-1">
                    <div className="text-xs font-semibold text-gray-500 mb-4 px-2 tracking-wider mt-2">MENU</div>
                    <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#242A38] text-white font-medium hover:bg-gray-900 mb-3">
                        <LinkIcon size={18} /> Webpages
                    </Link>
                    <Link href="/dashboard/gallery" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#242A38] text-white font-medium hover:bg-gray-900">
                        <Camera size={18} /> Gallery
                    </Link>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-w-0 h-full">
                {/* Top Nav */}
                <header className="h-16 flex items-center justify-between px-8 border-b border-[#1F2937] bg-[#0E121A] shrink-0">
                    <div className="text-sm font-medium text-gray-500 flex items-center gap-2">
                        <Link href="/dashboard">
                        Webpages
                        </Link>
                        <ChevronRight size={14} />
                        <span className="text-gray-200">Configuration</span>
                    </div>
                    <div className="flex items-center gap-4">
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
