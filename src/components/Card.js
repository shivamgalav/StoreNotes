import React,{useState} from 'react'

function Card(props) {
    const [show, setShow] = useState(true);
    const [edit, setEdit] = useState(false);
    const [text, setText] = useState(props.text);
    const [title, settitle] = useState(props.title);
    const handleChange = (event) => {
        setText(event.target.value);
    }
    const handleTitle = (event)=>{
        settitle(event.target.value);
    }
    const handleDelete = ()=>{
        setShow(false);
        props.data.splice(props.data.findIndex(a => a.id === props.id) , 1);
        console.log(props.data);
    }
    const handleEdit = ()=>{
        setEdit(true);
    }
    const confirmEdit =()=>{
        setEdit(false);
        const objIndex = props.data.findIndex((obj => obj.id === props.id));

        //Log object to Console.
        // console.log("Before update: ", myArray[objIndex])

        //Update object's name property.
        props.data[objIndex].text = text;
        props.data[objIndex].title = title;

        //Log object to console again.
        // console.log("After update: ", myArray[objIndex])
    }
    return (
        <>
        {
        show && <div className="mx-3 my-2">
            <div className="card" style={{width : "250px"}}>
            <div className="card-body" style={props.style}>
                {edit && <input type="title" className="form-control" style = {props.style} id="exampleFormControlInput1" 
                value={title} onChange ={handleTitle} />}
                {!edit && <h5 className="card-title">{title}</h5>}
                {edit && <textarea className="form-control my-3" style = {props.style} id="exampleFormControlTextarea1" rows="3" 
                value={text} onChange={handleChange}></textarea>}
                {!edit && <p className="card-text">{text}</p>}
                <button type="button" className="btn btn-outline-danger mx-2" onClick={handleDelete}>Delete</button>
                <button type="button" className="btn btn-outline-info" onClick={handleEdit}>Edit</button>
                {edit && <button type="button" className="btn btn-primary btn-sm my-2" onClick={confirmEdit}>Confirm Edit</button>}
            </div>
            </div>
        </div>
        }
        </>
    )
}

export default Card
