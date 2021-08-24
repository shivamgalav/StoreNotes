import React, { useState } from 'react'
import Card from './Card';
import './Form.css';
const data = [];
function useForceUpdate(){
    // eslint-disable-next-line
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}
function Form(props) {
    let key = 0;
    const [text, setText] = useState("");
    const [showCard, setshowCard] = useState(false);
    const [title, settitle] = useState("")
    const handleChange = (event) => {
        setText(event.target.value);
    }
    const handleTitle = (event)=>{
        settitle(event.target.value);
    }
    const handleClick = () => {
        const obj = {title: title,
                    text:text};
        data.push(obj);
        setshowCard(true);
        forceUpdate();
    }
    const forceUpdate = useForceUpdate();
    return (
        <div className="container">
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label" style= {{color: `${props.style.color}`}}>Heading</label>
                <input type="email" className="form-control" style = {props.style} id="exampleFormControlInput1" 
                placeholder="Enter Heading Here...." onChange ={handleTitle} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label" style= {{color: `${props.style.color}`}}>Note Text</label>
                <textarea className="form-control" style = {props.style} id="exampleFormControlTextarea1" rows="3" 
                value={text} onChange={handleChange} placeholder="Enter Notes Here...."></textarea>
            </div>
            <button type="button" className="btn btn-primary" onClick={handleClick}>Submit</button>
            <div className="cl my-3">
            {showCard && data.map(dt=>(
                <Card key={key++} text={dt.text} title={dt.title} style = {props.style}/>
            ))}
            </div>
        </div>
    )
}

export default Form;
