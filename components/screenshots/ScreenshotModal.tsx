"use client";
import { ScreenshotRecord } from "@/utils/groupScreenshots";
import { X, Download, Calendar, Link as LinkIcon } from "lucide-react";

interface ScreenshotModalProps {
    screenshot: ScreenshotRecord | null;
    onClose: () => void;
}

export function ScreenshotModal({ screenshot, onClose }: ScreenshotModalProps) {
    if (!screenshot) return null;

    const handleDownload = async () => {
        try {
            const response = await fetch(screenshot.s3_url);

            const blob = await response.blob();

            const url = window.URL.createObjectURL(blob);

            const a = document.createElement("a");
            a.href = url;
            a.download = `cronshot-${screenshot.id}.png`;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        } catch (err) {
            console.error("Download failed!", err);

            window.open(screenshot.s3_url, "_blank");
        }
    };

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8">

            <button
                type="button"
                className="absolute inset-0 bg-[#0E121A]/80 backdrop-blur-xl w-full h-full border-none"
                onClick={onClose}
                aria-label="Close modal"
            />

            <div className="relative w-full max-w-6xl max-h-full bg-[#12161F] border border-[#1F2937] rounded-3xl shadow-2xl overflow-hidden flex flex-col">


                <div className="flex items-center justify-between p-4 border-b border-[#1F2937] bg-[#12161F]/50">
                    <div className="flex flex-col">
                        <div className="flex items-center gap-2 text-gray-400 text-xs mb-1">
                            <LinkIcon size={12} />
                            <span className="truncate max-w-[300px] md:max-w-md">{screenshot.target_url}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-200 text-sm font-semibold">
                            <Calendar size={14} className="text-blue-400" />
                            {new Date(screenshot.taken_at).toLocaleString('en-US')}
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={handleDownload}
                            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-blue-600/20 active:scale-95"
                        >
                            <Download size={16} />
                            <span className="hidden sm:inline">Download</span>
                        </button>
                        <button
                            onClick={onClose}
                            className="p-2 text-gray-400 hover:text-white hover:bg-[#1F2937] rounded-xl transition-colors"
                        >
                            <X size={24} />
                        </button>
                    </div>
                </div>

                <div className="flex-1 overflow-auto bg-[#0E121A] p-4 flex items-start justify-center">
                    <img
                        src={screenshot.s3_url}
                        alt="Full screenshot"
                        className="rounded-lg shadow-2xl h-auto w-auto max-w-full"
                    />
                </div>
            </div>
        </div>
    );
}
