import React, { useState } from 'react'




export default function Textconvert(props) {
    const clicked = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase","success")
    }
    const onloclicked = () => {
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert("Converted to Lowercase","success")
    }
    const onclrtext = () => {
     // let newtext = text.toLowerCase();
      setText(' ');
      props.showAlert("Text Cleared","success")
  }
    const afterchanging = (event) =>{
       setText(event.target.value)
    }
    const [text,setText] = useState(' ')
  return (
    <>
    <div className='container' style={{color: props.mode==='light'?'black':'White'}}>
        <h2>{props.Heading}</h2>
      <textarea className='form-control' id='my-box' rows="8" value={text} onChange={afterchanging} placeholder = 'enter your text' style={{backgroundColor: props.mode==='light'?'white':'grey' , color: props.mode==='light'?'black':'White'}}></textarea>
      <button className= "btn btn-primary my-3" onClick={clicked} >Convert to Uppercase</button>
      <button className= "btn btn-primary my-3 mx-3" onClick={onloclicked} >Convert to lowercase</button>
      <button className= "btn btn-primary my-3 " onClick={onclrtext} >Clear text</button>
    </div>
    <div style={{color: props.mode==='light'?'black':'White'}}>
       <h2>your text summary</h2>
       <p>your text has {text.split(" ").length} words and{text.length} characters</p>
    </div>
    </>
  )
}
