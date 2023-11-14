import React, {useState} from 'react';
import Navbar from '../components/Navbar';

export default function TextFrom(props) {
    const uppercase = ()=> {
        let newText = text.toUpperCase();
        textupdate(newText);
    }

    const lowercase = ()=> {
        let newText = text.toLowerCase();
        textupdate(newText);
        }

    const cleartext = ()=> {
        let newText = "";
        textupdate(newText);
        }
        
    const uppercaseDone = (event)=> {
        textupdate(event.target.value)
        }

    const sentencecase = (event)=> {
        let newText = text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
        textupdate(newText);    
        }

    const copytext = ()=> {
        var text = document.getElementById("mytext");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const [text, textupdate] = useState('');
  return (
    <>
     <Navbar title="Homepage" about="About Us" />
    <div className="container">
    <div className="mb-3">
    <h3>{props.heading}</h3>
  <textarea className="form-control" value={text} onChange={uppercaseDone} id="mytext" rows="5"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={uppercase}>Text To UPPERCASE</button>
<button className="btn btn-primary mx-1" onClick={lowercase}>Text To lowercase</button>
<button className="btn btn-primary mx-1" onClick={sentencecase}>Sentense Case</button>
<button className="btn btn-primary mx-1" onClick={cleartext}>Clear Text</button>
<button className="btn btn-primary mx-1" onClick={copytext}>Copy Text</button>

    </div>

<div className="container my-3">
    <h3>Text Summary</h3>
    <p>{text.length} Characters & {text.split(" ").length} words. { 0.008 * text.split(" ").length } Minutes to read the text.</p>
    <h4>Text Preview</h4>
    <textarea className="form-control" value={text} id="mytext" rows="5" readOnly></textarea>

</div>
    </>

  )
}
