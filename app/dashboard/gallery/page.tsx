"use client";

import { useState } from "react";
import { useScreenshots } from "@/hooks/useScreenshots";
import { groupScreenshotsByHostname, ScreenshotRecord } from "@/utils/groupScreenshots";
import { SiteGroup } from "@/components/screenshots/SiteGroup";
import { ScreenshotModal } from "@/components/screenshots/ScreenshotModal";
import { Loader2, ImageOff, AlertCircle } from "lucide-react";

export default function GalleryPage() {
  const { screenshots, loading, error } = useScreenshots();
  const [selectedScreenshot, setSelectedScreenshot] = useState<ScreenshotRecord | null>(null);

  const groupedScreenshots = groupScreenshotsByHostname(screenshots);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] h-full text-gray-400 gap-4">
        <Loader2 className="w-10 h-10 animate-spin text-blue-500" />
        <p className="text-sm font-medium animate-pulse">Loading gallery...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] h-full text-red-400 p-8 text-center gap-4">
        <AlertCircle className="w-12 h-12 opacity-50" />
        <div>
          <h3 className="text-lg font-semibold">Connection Error</h3>
          <p className="text-sm opacity-80">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-[1400px] mx-auto text-white">
      <header className="mb-10">
        <h1 className="text-2xl font-bold mb-2">Gallery</h1>
        <p className="text-gray-400 text-sm">Your historical screenshots, organized by domain.</p>
      </header>

      <div className="space-y-2">
        {Array.from(groupedScreenshots.entries()).map(([hostname, items]) => (
          <SiteGroup 
            key={hostname}
            hostname={hostname}
            screenshots={items}
            onScreenshotClick={(ss) => setSelectedScreenshot(ss)}
          />
        ))}

        {screenshots.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-gray-500 border-2 border-dashed border-[#1F2937] rounded-3xl">
                <ImageOff className="w-12 h-12 mb-4 opacity-20" />
                <p>No screenshots found in your library.</p>
            </div>
        )}
      </div>

      <ScreenshotModal 
        screenshot={selectedScreenshot}
        onClose={() => setSelectedScreenshot(null)}
      />
    </div>
  );
}
