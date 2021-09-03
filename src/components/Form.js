import React, { useState } from 'react'
import Card from './Card';

if(!localStorage.data){
    let emparr=[];
    localStorage.data = JSON.stringify(emparr);
}
let data =JSON.parse(localStorage.data);
function useForceUpdate(){
    // eslint-disable-next-line
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}
let key = 0;
function Form(props) {
    const [text, setText] = useState("");
    const [title, settitle] = useState("");
    const handleChange = (event) => {
        setText(event.target.value);
    }
    const handleTitle = (event)=>{
        settitle(event.target.value);
    }
    const clearAll = ()=>{
        if(window.confirm("This Action will Delete all Notes!!")){
            localStorage.clear();
            data=[];
            localStorage.data = JSON.stringify(data);
            forceUpdate();
        }
    }
    const handleClick = () => {
        const obj = {id:`${key}`,title: title,
                    text:text};
        key++;
        data.push(obj);
        localStorage.data = JSON.stringify(data);
        // console.log(data);
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
                <label htmlFor="exampleFormControlTextarea1" className="form-label" style= {{color: `${props.style.color}`}}>Notes Text</label>
                <textarea className="form-control" style = {props.style} id="exampleFormControlTextarea1" rows="3" 
                value={text} onChange={handleChange} placeholder="Enter Notes Here...."></textarea>
            </div>
            <button type="button" className="btn btn-primary" onClick={handleClick}>Add</button>
            <button type="button" class="btn btn-warning mx-2" onClick={clearAll}>Clear All Notes</button>
            <div className="my-3" style={{display:"flex",flexWrap:"wrap"}}>
            {data.map(dt=>(
                <Card key={dt.id} text={dt.text} id={dt.id} title={dt.title} style = {props.style} data={data} update={forceUpdate}/>
            ))}
            </div>
        </div>
    )
}

export default Form;
