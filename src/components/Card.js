import React from 'react'

function Card(props) {
    return (
        <div className="mx-3">
            <div className="card" style={{width : "18rem"}}>
            {/* <img src="..." className="card-img-top" alt="..."> */}
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <a href="/" className="btn btn-primary">Open</a>
            </div>
            </div>
        </div>
    )
}

export default Card
