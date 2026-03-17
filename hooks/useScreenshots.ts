import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { ScreenshotRecord } from "@/utils/groupScreenshots";

export function useScreenshots() {
    const [screenshots, setScreenshots] = useState<ScreenshotRecord[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchScreenshots() {
            try {
                setLoading(true);
                
                const {data, error: sbError} =
                await supabase
                .from("screenshots")
                .select("*")
                .order("taken_at",{ascending: false});

                if (sbError) throw sbError;

                setScreenshots(data || []);
            } catch (err: any) {
                console.error("Error fetching screenshots:",err.message);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchScreenshots();
    },[]);

    return {screenshots, loading, error};
}