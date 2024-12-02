import { useEffect, useState } from "react";

interface FetchResponse<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}

export const useFetch = <T>(fetch: () => Promise<T>): FetchResponse<T> => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch();
                setData(response);
            } catch (error: unknown) {
                setError(
                    error instanceof Error ? error.message : "An error occurred"
                );
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [fetch]);

    return { data, loading, error };
};
