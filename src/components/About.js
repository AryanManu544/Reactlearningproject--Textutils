import React, { useState } from "react";

export default function About(props) {
  const [myStyle, setMyStyle] = useState({
    color: props.mode === "dark" ? "orange" : "blue",
    backgroundColor: props.mode === "dark" ? "black" : "white",
    border: props.mode === "dark" ? "1px solid orange" : "1px solid blue",
  });

  React.useEffect(() => {
    setMyStyle({
      color: props.mode === "dark" ? "orange" : "blue",
      backgroundColor: props.mode === "dark" ? "black" : "white",
      border: props.mode === "dark" ? "1px solid orange" : "1px solid blue",
    });
  }, [props.mode]);

  return (
    <div className="container" style={myStyle}>
      <h1 className="my-2">About</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              Description:
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
            style={myStyle}
          >
            <div className="accordion-body">
              <p>This is a website that is made to help the user with writing paragraphs, checking wordcounts and changing different 
                texts. 
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              Built by:
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
            style={myStyle}
          >
            <div className="accordion-body">
              <p>Aryan Manu, student of btech in mathematics and computing, delhi technological university.</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              Credits:
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
            style={myStyle}
          >
            <div className="accordion-body">
              <p>This was made with the help of the codewithharry React course.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
