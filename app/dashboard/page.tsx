"use client";

import { useState } from "react";
import { Camera, AlertCircle, Loader2, CheckCircle} from "lucide-react";
import { useAuth } from "@clerk/nextjs";

export default function ConfigurationPage() {
    const { getToken } = useAuth();
    const [url, setUrl] = useState("");
    const [frequency, setFrequency] = useState("Daily");
    const [time, setTime] = useState("08:00");
    const [timezone, setTimezone] = useState(3);
    const [width, setWidth] = useState(1280);
    const [height, setHeight] = useState(1024);
    const [fullPage, setFullPage] = useState(false);
    const [userAgent, setUserAgent] = useState("");
    const [authorizationHeader, setAuthorizationHeader] = useState("");
    const [cookies, setCookies] = useState("");
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [outputUrl, setOutputUrl] = useState<string | null>(null);

const handleSchedule = async () => {
    if (!url) {
        setError("Webpage URL is required.");
        return;
    }

    try {
        setLoading(true);
        setError(null);
        setOutputUrl(null);
        setSuccessMessage(null);

        const token = await getToken();

        const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/scheduled-jobs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                target_url: url,
                width,
                height,
                full_page: fullPage,
                frequency: frequency.toLowerCase(),
                time_of_day: time,
                timezone_offset: timezone,
                user_agent: userAgent || null,
                authorization_header: authorizationHeader || null,
                cookies: cookies || null
})
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.error || "Failed to schedule screenshot.");
        }

        setSuccessMessage("Screenshot scheduled successfully! Check the gallery later.");

    } catch (err: any) {
        console.error("Schedule error:", err);
        setError(err.message || "An unexpected error occurred.");
    } finally {
        setLoading(false);
    }
};


    let outputContent;
    if (error) {
        outputContent = (
            <div className="flex flex-col items-center text-red-400 gap-3 max-w-sm text-center">
                <AlertCircle size={32} />
                <p className="text-sm">{error}</p>
            </div>
        );
    } else if (outputUrl) {
        outputContent = (
            <img
                src={outputUrl}
                alt="Screenshot output"
                className="rounded shadow-lg w-full max-h-full object-contain"
            />
        );
    } else if (successMessage) {
    outputContent = (
        <div className="flex flex-col items-center text-green-400 gap-3 max-w-sm text-center">
            <CheckCircle size={32} />
            <p className="text-sm">{successMessage}</p>
        </div>
    );
}


    return (
        <div className="p-8 max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-8">

            {/* Left Column: Form */}
            <div className="w-full lg:max-w-md xl:max-w-lg space-y-6">

                {/* Settings Block */}
                <div className="border border-[#1F2937] bg-[#12161F]/70 rounded-xl p-6 shadow-sm">
                    <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-5">Settings</h2>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-xs font-semibold text-gray-400 mb-1.5 ml-0.5">Webpage URL</label>
                            <input
                                type="url"
                                value={url}
                                placeholder="https://example.com"
                                onChange={(e) => setUrl(e.target.value)}
                                className="w-full bg-[#0E121A] border border-[#1F2937] rounded-lg px-4 py-2.5 text-gray-200 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-gray-400 mb-1.5 ml-0.5">Frequency & Time</label>
                            <div className="flex gap-2">
                                <select
                                    value={frequency}
                                    onChange={(e) => setFrequency(e.target.value)}
                                    className="flex-1 bg-[#0E121A] border border-[#1F2937] rounded-lg px-4 py-2.5 text-gray-200 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors appearance-none"
                                >
                                    <option>Daily</option>
                                    <option>Weekly</option>
                                    <option>Monthly</option>
                                </select>
                                <select
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                    className="w-28 sm:w-32 bg-[#0E121A] border border-[#1F2937] rounded-lg px-4 py-2.5 text-gray-200 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors appearance-none"
                                >
                                    <option value="08:00">08:00</option>
                                    <option value="13:00">13:00</option>
                                    <option value="20:00">20:00</option>
                                </select>                              
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-400 mb-1.5 ml-0.5">Timezone</label>
                            <select
                                value={timezone}
                                onChange={(e) => setTimezone(Number(e.target.value))}
                                className="w-full bg-[#0E121A] border border-[#1F2937] rounded-lg px-4 py-2.5 text-gray-200 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors appearance-none"
                            >
                                <option value={3}>UTC+3 (Istanbul / Turkey)</option>
                                <option value={2}>UTC+2 (Frankfurt / Europe)</option>
                                <option value={1}>UTC+1</option>
                                <option value={0}>UTC+0 (London / Dublin)</option>
                                <option value={-1}>UTC-1 (Azores)</option>
                                <option value={-3}>UTC-3 (Brasilia)</option>
                                <option value={-5}>UTC-5 (New York / USA East)</option>
                                <option value={-6}>UTC-6 (Chicago / USA Central)</option>
                                <option value={-8}>UTC-8 (Los Angeles / USA West)</option>
                            </select>
                        </div>                       
                        <div className="flex items-center gap-3">
                            <label className="block text-xs font-semibold text-gray-400 mb-1.5 ml-0.5">Full Page</label>
                            <input
                                type="checkbox"
                                checked={fullPage}
                                onChange={(e) => setFullPage(e.target.checked)}
                                className="w-10 h-5 bg-[#1F2937] rounded-full appearance-none cursor-pointer checked:bg-blue-500 relative transition-colors after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:w-4 after:h-4 after:rounded-full after:transition-all checked:after:translate-x-5"
                            />
                        </div>
                    </div>
                </div>

                {/* Advanced Block */}
                <div className="border border-[#1F2937] bg-[#12161F]/70 rounded-xl p-6 shadow-sm">
                    <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-5">Advanced</h2>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-xs font-semibold text-gray-400 mb-1.5 ml-0.5">Width</label>
                            <input
                                type=""
                                value={width}
                                onChange={(e) => setWidth(Number(e.target.value))}
                                className="w-full bg-[#0E121A] border border-[#1F2937] rounded-lg px-4 py-2.5 text-gray-200 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-gray-400 mb-1.5 ml-0.5">Height</label>
                            <input
                                type=""
                                value={height}
                                onChange={(e) => setHeight(Number(e.target.value))}
                                className="w-full bg-[#0E121A] border border-[#1F2937] rounded-lg px-4 py-2.5 text-gray-200 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-gray-400 mb-1.5 ml-0.5">User Agent</label>
                            <input
                                type="text"
                                value={userAgent}
                                onChange={(e) => setUserAgent(e.target.value)}
                                className="w-full bg-[#0E121A] border border-[#1F2937] rounded-lg px-4 py-2.5 text-gray-400 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-gray-400 mb-1.5 ml-0.5">Authorization Header</label>
                            <input
                                type="text"
                                value={authorizationHeader}
                                onChange={(e) => setAuthorizationHeader(e.target.value)}
                                className="w-full bg-[#0E121A] border border-[#1F2937] rounded-lg px-4 py-2.5 text-gray-400 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-gray-400 mb-1.5 ml-0.5">Cookies</label>
                            <textarea
                                value={cookies}
                                onChange={(e) => setCookies(e.target.value)}
                                rows={3}
                                className="w-full bg-[#0E121A] border border-[#1F2937] rounded-lg px-4 py-2.5 text-gray-400 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column: Output Pane */}
            <div className="flex-1 min-w-[500px] flex flex-col gap-4">
                {/* Actions */}
                <div className="flex justify-end gap-3">
                    <button
                        onClick={handleSchedule}
                        disabled={loading}
                        className="flex items-center gap-2 px-4 py-2 bg-white text-black text-sm font-semibold rounded-lg hover:bg-gray-200 transition-colors shadow-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? <Loader2 size={16} className="animate-spin" /> : <Camera size={16} />}
                        {loading ? "Capturing..." : "Capture"}
                    </button>
                </div>

                {/* Output Display */}
                <div className="relative flex-1 min-h-[500px] bg-[#1a202c]/50 rounded-2xl border border-[#1F2937] flex flex-col items-center justify-center overflow-hidden shadow-inner p-4">
                    {/* Output Badge */}
                    <div className="absolute top-4 right-4 bg-[#0E121A]/80 backdrop-blur-md border border-[#1F2937] text-gray-400 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm z-10">
                        Output
                    </div>

                    {outputContent}
                </div>
            </div>
        </div>
    );
}
