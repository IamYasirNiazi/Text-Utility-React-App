import React, {useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('');

  const upperCaseFunc = ()=>{
    let newText = text.toUpperCase();
    props.showAlert('success', 'Uppercase Function is called');
    return setText(newText);
  }

  const lowerCaseFunc = ()=>{
    let newText = text.toLowerCase();
    props.showAlert('success', 'Lowercase Function is called');
    return setText(newText);
  }

  const capCaseFunc = ()=>{
    const newText = text.trim().split(/[ ]+/);

    for (let i = 0; i < newText.length; i++) {
    newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1).toLowerCase();
    props.showAlert('success', 'Capitalize Function is called');
    }
    // console.log(newText.join())
    // setText(newText);
    setText(newText.join(" "));
  }

  const removeSpacesFunc = ()=>{
    const newText = text.trim().split(/[ ]+/).join(" ");
    setText(newText)

    // newText.select();
    // navigator.clipboard.writeText(newText.value);
    // document.getSelection().removeAllRanges();
    props.showAlert('success', 'Remove Extra Spaces Function is called');
  }

  const copyTextFunc = ()=>{
    const newText = document.getElementById('textarea')
    // newText.select();
    navigator.clipboard.writeText(newText.value);
    // document.getSelection().removeAllRanges();
    props.showAlert('success', 'Copy Text Function is called');
  }

  const clrTextFunc = ()=>{
    // setText('');
    const newText = ''
    setText(newText)
  }

  const onChangeFunc = (event)=>{
    setText(event.target.value);
  }

  return (
    <>
    <div className='container'>
        <h1 className='mb-3'>{props.heading}</h1>
        <div>
            <textarea class="form-control" id="textarea" style={{backgroundColor: props.mode==='success'? '#027002' : props.mode==='danger'? '#df0000' : props.mode==='dark'? '#323232' : '#f9f9f9', color: props.mode!=='light'? 'white' : 'black' }} onChange={onChangeFunc} value={text} rows="8"></textarea>
        </div>
    </div>
    <div className="container">
        <button className="btn btn-sm me-2 mt-2" style={{backgroundColor: props.mode==='success'? '#005400' : props.mode==='dark'? '#565656' : props.mode==='danger'? '#b90101' : '#0d6efd' , color: 'white'}} disabled={text.trim().length===0} onClick={upperCaseFunc} >Convert to Uppercase</button>
        <button className='btn btn-sm me-2 mt-2' style={{backgroundColor: props.mode==='success'? '#005400' : props.mode==='dark'? '#565656' : props.mode==='danger'? '#b90101' : '#0d6efd' , color: 'white'}} disabled={text.trim().length===0} onClick={lowerCaseFunc} >Convert to Lowercase</button>
        <button className='btn btn-sm me-2 mt-2' style={{backgroundColor: props.mode==='success'? '#005400' : props.mode==='dark'? '#565656' : props.mode==='danger'? '#b90101' : '#0d6efd' , color: 'white'}} disabled={text.trim().length===0} onClick={capCaseFunc} >Capitalize Text</button>
        <button className='btn btn-sm me-2 mt-2' style={{backgroundColor: props.mode==='success'? '#005400' : props.mode==='dark'? '#565656' : props.mode==='danger'? '#b90101' : '#0d6efd' , color: 'white'}} disabled={text.trim().length===0} onClick={removeSpacesFunc} >Remove Extra Spaces</button>
        <button className='btn btn-sm me-2 mt-2' style={{backgroundColor: props.mode==='success'? '#005400' : props.mode==='dark'? '#565656' : props.mode==='danger'? '#b90101' : '#0d6efd' , color: 'white'}} disabled={text.trim().length===0} onClick={copyTextFunc} >Copy Text</button>
        <button className='btn btn-sm mt-2' style={{backgroundColor: props.mode==='success'? '#005400' : props.mode==='dark'? '#565656' : props.mode==='danger'? '#b90101' : '#0d6efd' , color: 'white'}} disabled={text.trim().length===0} onClick={clrTextFunc} >Clear Text</button>
    </div>
    <div className="container my-3">
        <h2>Your Text Summary</h2>
        {/* {text.trim().length===0? text.trim().split(/[ ]+/).length-1 : text.trim().split(/[ ]+/).length } */}
        {/* {text.split(/[ ]+/).filter((word)=>{ return word.length!==0 }).length } Words and {text.replace(/ /g, '').length} Characters in your Text. */}
        <p>{text.split(/\s+/).filter((word)=>{ return word.length!==0 }).length } Words and {text.replace(/\s+/g, '').length} Characters in your Text.</p>
        <p>{.008 * text.trim().length} Minutes required to read the whole Text.</p>
        <h3>Text Preview</h3>
        <p>{text.trim().length===0? "Enter Text to Preview" : text }</p>
    </div>
    </>
  )
}
