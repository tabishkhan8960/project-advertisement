import React,{useState} from 'react'

export default function TextForm(props) {
    const handelupclick=()=>{
        console.log("button click");
        let newtext=text.toUpperCase();
        setText(newtext);
    };
    const handeldownclick=()=>{
        console.log("button click");
        let newtext=text.toLowerCase();
        setText(newtext);
    };
    const handleOnChange=(event)=>{
        console.log("handonchage");
        setText(event.target.value);
        
    };
const [text, setText] = useState('Enter the text');
return (
    <>
<div className="container">
<h1>{props.heading}</h1>
<div className="mb-3">
  
<textarea className="form-control" value={text} onChange={handleOnChange}id="mybox" rows="6"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handelupclick}>convert to upper case</button>
<button className="btn btn-primary" onClick={handeldownclick}>convert to lower case</button>
    </div>
    <div className="container my-3">
        <h1>summery</h1>
        <p>Words={text.split(" ").length} Chracters={text.length}</p>
        <p>{0.008*60*text.split(" ").length} seconds to read</p>
        <h2>preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
//frc