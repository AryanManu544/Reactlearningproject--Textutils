import React, {useState} from "react";

export default function Textform(props){
    const [text,setText] = useState("");
    const handleUpclick = () => {
        let newtext = text.toUpperCase()
        setText(newtext)
    }
    const handleonChange = (event) => {
        setText(event.target.value)
    }
    const handleLoclick = () => {
        let newtext = text.toLowerCase()
        setText(newtext)
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }
    const title = () => {
        let newText = text
            .split(" ")
            .map((el) => el.charAt(0).toUpperCase() + el.slice(1).toLowerCase())
            .join(" ");
        setText(newText)
    }
    const handlecopy = () =>{
        var text = document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value)
    }
    const handleclear = () =>{
        var text = document.getElementById("myBox")
        if (text) {
            text.value = ""; 
        } else {
            console.error("Element with ID 'myBox' not found.");
        }
    }

    return(
        <>
        <div className = "container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" id="myBox" value= {text} onChange= {handleonChange} rows="8"></textarea>
            </div>
            <btn className="btn btn-primary" onClick = {handleUpclick}>Convert to Uppercase</btn>
            <btn className="btn btn-primary mx-2" onClick = {handleLoclick}>Convert to Lowercase</btn>
            <button type="submit" onClick={speak} className="btn btn-primary">Speak</button>
            <btn className="btn btn-primary mx-2" onClick = {title}>Capitalize the words</btn>
            <btn className="btn btn-primary mx-2" onClick = {handlecopy}>Copy Text</btn>
            <btn className="btn btn-primary mx-2" onClick = {handleclear}>Clear Text</btn>

        </div>
        <div className= "container my-3" >
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} Words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}