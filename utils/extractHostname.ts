export function extractHostname(url: string): string {
    try {
        const hostname = new URL(url).hostname;
        return hostname.replace("www.", "");
    } catch (error) {
        console.error("Invalid URL:", error);
        return url;
    }
}