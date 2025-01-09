import React, {useState} from "react";

export default function Textform(props){
    const [text,setText] = useState("Enter text here");
    const handleUpclick = () => {
        let newtext = text.toUpperCase()
        setText(newtext)
    }
    const handleonChange = (event) => {
        setText(event.target.value)
    }
    return(
        <div>
            <h1>{props.heading}</h1>
            <div class="mb-3">
            <textarea className="form-control" id="myBox" value= {text} onChange= {handleonChange} rows="3"></textarea>
            </div>
            <btn className="btn btn-primary" onClick = {handleUpclick}>Convert to Uppercase</btn>
        </div>
    )
}