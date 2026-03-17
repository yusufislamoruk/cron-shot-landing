"use client";

import { ScreenshotRecord } from "@/utils/groupScreenshots";
import { ExternalLink } from "lucide-react";

interface ScreenshotCardProps {
  screenshot: ScreenshotRecord;
  onClick: (screenshot: ScreenshotRecord) => void;
}

export function ScreenshotCard({ screenshot, onClick }: ScreenshotCardProps) {
  const formattedDate = new Date(screenshot.taken_at).toLocaleString('en-US', {
    day: '2-digit',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div 
      onClick={() => onClick(screenshot)}
      className="group relative flex-shrink-0 w-72 cursor-pointer bg-[#12161F]/70 border border-[#1F2937] rounded-xl overflow-hidden transition-all hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10"
    >
      <div className="relative aspect-video overflow-hidden bg-[#0E121A]">
        <img 
          src={screenshot.s3_url} 
          alt={screenshot.target_url}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <ExternalLink className="text-white w-6 h-6" />
        </div>
      </div>
      <div className="p-3">
        <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-1">
          {formattedDate}
        </p>
        <p className="text-xs text-gray-300 truncate font-medium">
          {screenshot.target_url}
        </p>
      </div>
    </div>
  );
}
