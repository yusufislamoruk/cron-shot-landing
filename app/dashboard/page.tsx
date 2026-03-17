"use client";

import { useState } from "react";
import { Camera, Save, AlertCircle, Loader2 } from "lucide-react";
import { useAuth } from "@clerk/nextjs";

export default function ConfigurationPage() {
    const { getToken } = useAuth();
    const [url, setUrl] = useState("");
    const [frequency, setFrequency] = useState("Daily");
    const [width, setWidth] = useState(1280);
    const [height, setHeight] = useState(1024);
    const [userAgent, setUserAgent] = useState("");
    const [authHeader, setAuthHeader] = useState("");
    const [cookies, setCookies] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [outputUrl, setOutputUrl] = useState<string | null>(null);

    const handleTest = async () => {
        if (!url) {
            setError("Webpage URL is required.");
            return;
        }

        try {
            setLoading(true);
            setError(null);
            setOutputUrl(null);

            const token = await getToken();

            const response = await fetch("http://localhost:3001/screenshot", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    url,
                    width,
                    height,
                    fullPage: false
                })
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || "Failed to capture screenshot.");
            }

            const s3Url = result.screenshot?.s3_url || result.data?.s3_url;

            console.log(s3Url);

            if (s3Url) {
                setOutputUrl(s3Url);
            }
            else {
                setError("Failed to capture screenshot.");
            }

        } catch (err: any) {
            console.error("Screenshot error:", err);
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
    } else {
        outputContent = (
            <div className="w-32 h-32 text-gray-700 opacity-30">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" /><circle cx="12" cy="13" r="3" /></svg>
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
                            <label className="block text-xs font-semibold text-gray-400 mb-1.5 ml-0.5">Frequency</label>
                            <select
                                value={frequency}
                                onChange={(e) => setFrequency(e.target.value)}
                                className="w-full bg-[#0E121A] border border-[#1F2937] rounded-lg px-4 py-2.5 text-gray-200 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors appearance-none"
                            >
                                <option>Daily</option>
                                <option>Weekly</option>
                                <option>Monthly</option>
                            </select>
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
                                value={authHeader}
                                onChange={(e) => setAuthHeader(e.target.value)}
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
                        onClick={handleTest}
                        disabled={loading}
                        className="flex items-center gap-2 px-4 py-2 bg-white text-black text-sm font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? <Loader2 size={16} className="animate-spin" /> : <Camera size={16} />}
                        {loading ? "Capturing..." : "Test"}
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-[#2D3342] text-white text-sm font-semibold rounded-lg hover:bg-[#3B4254] transition-colors border border-gray-600 shadow-sm cursor-pointer">
                        <Save size={16} /> Save
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
