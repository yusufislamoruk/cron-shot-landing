"use client";

import { useScheduledJobs } from "@/hooks/useScheduledJobs";
import { Loader2 } from "lucide-react";

export default function ScheduledJobsPage() {
    const { jobs, loading: jobsLoading, cancelJob } = useScheduledJobs();

    return (
        <div className="p-4 sm:p-8 max-w-4xl mx-auto">
            <h1 className="text-xl font-semibold text-white mb-6">Scheduled Jobs</h1>

            {jobsLoading && (
                <div className="flex items-center gap-2 text-gray-400">
                    <Loader2 size={16} className="animate-spin" />
                    Loading...
                </div>
            )}

            {!jobsLoading && jobs.length === 0 && (
                <p className="text-gray-500">No scheduled jobs yet.</p>
            )}

            {!jobsLoading && jobs.length > 0 && (
                <div className="space-y-3">
                    {jobs.map(job => (
                        <div
                            key={job.id}
                            className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-[#12161F] border border-[#1F2937] rounded-lg px-4 py-3"
                        >
                            <div className="flex-1 min-w-0">
                                <p className="text-gray-200 text-sm font-medium truncate">{job.target_url}</p>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="text-xs text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">
                                        {job.frequency}
                                    </span>
                                    <span className="text-xs text-gray-400">
                                        {job.time_of_day} (UTC{job.timezone_offset >= 0 ? "+" : ""}
                                        {job.timezone_offset})
                                    </span>
                                </div>
                            </div>
                            <button
                                onClick={() => cancelJob(job.id)}
                                className="text-red-400 hover:text-red-300 text-sm shrink-0"
                            >
                                Cancel
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
