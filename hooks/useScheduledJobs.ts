import { useState, useEffect } from 'react';
import { useAuth } from '@clerk/nextjs';

export function useScheduledJobs() {
    const { userId, getToken, isLoaded } = useAuth();
    const [jobs, setJobs] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchJobs = async () => {
        if (!isLoaded || !userId) return;
        try {
            setLoading(true);
            const token = await getToken();
            const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/scheduled-jobs', {
                headers: { Authorization: `Bearer ${token}` }
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error);
            setJobs(data);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const cancelJob = async (id: string) => {
        try {
            const token = await getToken();
            const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/scheduled-jobs/' + id, {
                method: 'DELETE',
                headers: { Authorization: `Bearer ${token}` }
            });
            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error);
            }
            setJobs(prev => prev.filter(j => j.id !== id));
        } catch (err: any) {
            setError(err.message);
        }
    };

    useEffect(() => {
        fetchJobs();
    }, [userId, isLoaded]);

    return { jobs, loading, error, cancelJob, refetch: fetchJobs };
}
