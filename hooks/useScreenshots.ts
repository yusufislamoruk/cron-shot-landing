import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { ScreenshotRecord } from "@/utils/groupScreenshots";
import { useAuth } from "@clerk/nextjs";

export function useScreenshots() {
    const { userId, isLoaded} = useAuth();
    const [screenshots, setScreenshots] = useState<ScreenshotRecord[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {

        if (!isLoaded || !userId) return;

        async function fetchScreenshots() {
            try {
                setLoading(true);
                
                const {data, error: sbError} =
                await supabase
                .from("screenshots")
                .select("*")
                .eq("user_id", userId)
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
    },[userId, isLoaded]);

    return {screenshots, loading, error};
}