import { extractHostname } from "./extractHostname";

export interface ScreenshotRecord {
    id: string;
    target_url: string;
    s3_url: string;
    full_page: boolean;
    width: number;
    height: number;
    taken_at: string;
}

export function groupScreenshotsByHostname(screenshots: ScreenshotRecord[]): Map<string, ScreenshotRecord[]> {
    const groups = new Map<string, ScreenshotRecord[]>();

    screenshots.forEach((ss) => {
        const hostname = extractHostname(ss.target_url);
        const existing = groups.get(hostname) || [];
        groups.set(hostname, [...existing, ss]);
    });

    return groups;
}