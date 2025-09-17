import { useState, useEffect } from "react"
import useFetch from "../hooks/useFetch"

export default function Cats(){
    var [url, setUrl] = useState("https://api.thecatapi.com/v1/images/search")
    var [imageSrc, setImageSrc] = useState("")
    const {data, status, error, refetch} = useFetch(url, {})
    function fetchCat(){
       refetch()
    }   
    useEffect(() => {
        if (data){
            setImageSrc(data[0].url)
        }
    }, [data])
    return (
        <div>
            <img src={imageSrc} alt=""></img>
            <p></p>
            <button onClick={() => fetchCat()}>Fetch Cat</button>
        </div>
    )
}