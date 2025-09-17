import { useState, useEffect } from "react"
import useFetch from "../hooks/useFetch"

export default function Cats(){
    const [url] = useState("https://api.thecatapi.com/v1/images/search")
    const [imageSrc, setImageSrc] = useState("")
    const [imageLoading, setImageLoading] = useState(false)
    const [imageError, setImageError] = useState(false)
    const {data, status, error, refetch} = useFetch(url, {})

    useEffect(() => {
        if (data && Array.isArray(data) && data.length > 0 && data[0]?.url){
            setImageSrc(data[0].url)
            setImageLoading(true)
            setImageError(false)
        }
    }, [data])

    const handleImageLoad = () => {
        setImageLoading(false)
    }

    const handleImageError = () => {
        setImageLoading(false)
        setImageError(true)
    }

    if (error) {
        return (
            <div>
                <h3>Error loading cat image</h3>
                <p>Something went wrong: {error.message || 'Unknown error'}</p>
                <button onClick={refetch}>Try Again</button>
            </div>
        )
    }

    return (
        <div>
            {status === "processing" && <p>Loading cat image...</p>}

            {imageSrc && (
                <div style={{ position: 'relative' }}>
                    {imageLoading && <p>Loading image...</p>}
                    {imageError ? (
                        <div>
                            <p>Failed to load image</p>
                            <button onClick={refetch}>Try Another Cat</button>
                        </div>
                    ) : (
                        <img
                            src={imageSrc}
                            alt="A random cat from The Cat API"
                            onLoad={handleImageLoad}
                            onError={handleImageError}
                            style={{ display: imageLoading ? 'none' : 'block' }}
                        />
                    )}
                </div>
            )}

            <div>
                <button
                    onClick={refetch}
                    disabled={status === "processing"}
                >
                    {status === "processing" ? "Loading..." : "Fetch New Cat"}
                </button>
            </div>
        </div>
    )
}