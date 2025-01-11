import React, {useState} from "react";
import Proptypes from "prop-types"

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
        <div className = "container" style= {{color: props.mode==="dark"?"white":"black"}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" id="myBox" style= {{backgroundColor: props.mode==="dark"?"black":"white", color: props.mode==="dark"?"white":"black"}} value= {text} onChange= {handleonChange} rows="8"></textarea>
            </div>
            <btn className="btn btn-primary" onClick = {handleUpclick} style= {{backgroundColor: props.mode === "dark"?"#fd7e14":"blue"}}>Convert to Uppercase</btn>
            <btn className="btn btn-primary mx-2" onClick = {handleLoclick} style= {{backgroundColor: props.mode === "dark"?"#fd7e14":"blue"}}>Convert to Lowercase</btn>
            <button type="submit" onClick={speak} className="btn btn-primary" style= {{backgroundColor: props.mode === "dark"?"#fd7e14":"blue"}}>Speak</button>
            <btn className="btn btn-primary mx-2" onClick = {title} style= {{backgroundColor: props.mode === "dark"?"#fd7e14":"blue"}}>Capitalize the words</btn>
            <btn className="btn btn-primary" onClick = {handlecopy} style= {{backgroundColor: props.mode === "dark"?"#fd7e14":"blue"}}>Copy Text</btn>
            <btn className="btn btn-primary mx-2" onClick = {handleclear} style= {{backgroundColor: props.mode === "dark"?"#fd7e14":"blue"}}>Clear Text</btn>

        </div>
        <div className= "container my-3" style= {{color: props.mode==="dark"?"white":"black"}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} Words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    )
}