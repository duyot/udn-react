

// To display a button 
// Upon click, it should change the title of the page Hello to some languge, which should be initialized in data file

import language from "../assets/language.json";
import { useState } from "react";
import { useEffect } from "react";

export default function Hello(){
const [currentIndex, setCurrentIndex] = useState(0);
const helloArray = language.hello;


    function changeLanguage(){
        setCurrentIndex((prevIndex) => (prevIndex + 1) % helloArray.length);
    }

   useEffect(() => {
    document.title = helloArray[currentIndex];
   }, [currentIndex])

    return (
        <div>
            <h1>{helloArray[currentIndex]}</h1>
            <button onClick={() => changeLanguage()}>Change Language</button>
        </div>
    )
}