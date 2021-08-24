import React from 'react'

function Card(props) {
    return (
        <div className="mx-3 my-2">
            <div className="card" style={{width : "18rem"}}>
            <div className="card-body" style={props.style}>
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <a href="/" className="btn btn-primary">Open</a>
            </div>
            </div>
        </div>
    )
}

export default Card
