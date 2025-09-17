
import React from "react"
import useWindowSize from "../hooks/useWindowSize"

export default function WindowSizer(){
    const {width, height} = useWindowSize()
    return (
        <div>
            <p>Width: {width}</p>
            <p>Height: {height}</p>
        </div>
    )
}