"use client";

import { ScreenshotRecord } from "@/utils/groupScreenshots";
import { ScreenshotCard } from "./ScreenshotCard";

interface SiteGroupProps {
  hostname: string;
  screenshots: ScreenshotRecord[];
  onScreenshotClick: (screenshot: ScreenshotRecord) => void;
}

export function SiteGroup({ hostname, screenshots, onScreenshotClick }: SiteGroupProps) {
  return (
    <div className="mb-10 last:mb-0">
      <div className="flex items-center gap-3 mb-4">
        <h3 className="text-lg font-semibold text-gray-100">{hostname}</h3>
        <span className="px-2 py-0.5 rounded-full bg-[#1F2937] text-gray-400 text-[10px] font-bold uppercase tracking-tighter">
          {screenshots.length} {screenshots.length === 1 ? 'SCREENSHOT' : 'SCREENSHOTS'}
        </span>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {screenshots.map((ss) => (
          <ScreenshotCard 
            key={ss.id} 
            screenshot={ss} 
            onClick={onScreenshotClick} 
          />
        ))}
      </div>
    </div>
  );
}
