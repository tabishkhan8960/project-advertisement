import React,{useState} from 'react'


export default function TextForm(props) {
    const handelupclick=()=>{
        console.log("button click");
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showalert("toUpperCase   ","success  ")
    };
    const handeldownclick=()=>{
        console.log("button click");
        let newtext=text.toLowerCase();
        setText(newtext);
        props.showalert("toLowerCase   ","success  ")
        
    };   
    const handelclearclick=()=>{
        console.log("button click");
        let newtext=("");
        setText(newtext);
        props.showalert("clear   ","success  ")
        
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
<button className="btn btn-secondary mx-2" onClick={handelupclick}>convert to upper case</button>
<button className="btn btn-secondary mx-2" onClick={handeldownclick}>convert to lower case</button>
<button className="btn btn-secondary mx-2" onClick={handelclearclick}>Clear</button>

    </div>
    <div className="container my-3">
        <h1>summery</h1>
        <p>Words={text.split(" ").length-1} Chracters={text.length}</p>
        <p>{0.008*60*text.split(" ").length-.48} seconds to read</p>
        <h2>preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
//rfc