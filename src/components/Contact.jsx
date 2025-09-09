
import {useState} from "react";

export default function Contact(){
    var [contactName, setContactName] = useState("integro");
    console.log("ContactName is: " + contactName)

    function updateMyContactName(){
        //get the value from input
        let currentContactName = document.getElementById("contact_name").value;
        setContactName(currentContactName)
    }

    return (<>
        <h1>Contact Name: {contactName}</h1>
        <input id="contact_name"></input>
        <button onClick={() => updateMyContactName()}>Change my contact</button>
    </>)
}