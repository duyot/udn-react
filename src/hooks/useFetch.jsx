// input parameters: URL, options
// return value: {data, status, error}
import { useState, useEffect } from "react";

export default function useFetch(url, options){
    const [data, setData] = useState(null);
    const [status, setStatus] = useState("idle");
    const [error, setError] = useState(null);
    const [refetchTrigger, setRefetchTrigger] = useState(0);

    useEffect(
        () => {
            if (!url){
                setError("No URL provided");
                return;
            }
            var doProcess = true;
            if (doProcess){
                setStatus("processing");
                fetch(url, options)
                .then(response => {
                    if (!response.ok){
                        throw new Error("Network response was not ok");
                    }
                    return response.json();
                })
                .then(data => {
                    setData(data);
                    setStatus("success");
                })
                .catch(error => {
                    setError(error);
                    setStatus("error");
                })
            }
            return () => doProcess = false;
        }, [url, refetchTrigger]
    )
    
    const refetch = () => setRefetchTrigger(prev => prev + 1);
    
    return { data, status, error, refetch };
}