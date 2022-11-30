import React, {useState} from 'react'

export default function TextForm(props) {
    const handleOnchange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }
    const handleUpperCase =()=>{
        
        // console.log("UpperCase was Clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!", "success");
    }

    const handleLowerCase =()=>{
        // console.log("LowerCase was Clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!", "success")
    }
    const handleClear =()=>{
        // console.log("clear was Clicked");
        let newText ="";
        setText(newText);
        props.showAlert("Text Cleared!", "success")
    }
    const handleCopy = () => {
        // console.log("I am Copy");
        let text = document.getElementById("my-box");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied To Clipboard!", "success")
    }
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed!!!", "success")
    }
    

    const [text, setText] = useState("");
    // text = "new text"; // Wrong way to change the State
   // setText("new text"); // Correct way to change the State
    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'black'}} id="my-box" rows="7"></textarea>
                </div>
                <button className='btn btn-primary' onClick={text.length>0?handleUpperCase:0}>Convert to UpperCase</button>
                <button className='btn btn-primary mx-2' onClick={text.length>0?handleLowerCase:0}>Convert to LowerCase</button>
                <button className='btn btn-primary mx-2' onClick={text.length>0?handleCopy:0}>Copy Text</button>
                <button className='btn btn-primary mx-2' onClick={text.length>0?handleExtraSpace:0}>Remove Extra Space</button>
                <button className='btn btn-primary mx-2' onClick={text.length>0?handleClear:0}>Clear Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your Text Summary</h2>
            <p>{text.length > 0 ? text.split(" ").length : 0} Words and {text.length} Characters</p>
            <p>{0.008 *text.split(" ").length} Minutes to Read </p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter Something In The Text Box Above to Preview It here"}</p>
        </div>
        
        </>
    )
}
