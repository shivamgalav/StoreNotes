import React from 'react'

function Navbar(props) {
    
    return (
        <>
        <nav className={`navbar navbar-expand-lg navbar-light bg-${props.mode === false?"light":"dark"}`}>
        <div className="container-fluid">
            <a className="navbar-brand" href="/" style= {{color: `${props.style.color}`}}>Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/" style= {{color: `${props.style.color}`}}>Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/" style= {{color: `${props.style.color}`}}>Link</a>
                </li>
                
            </ul>
            <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick = {props.setdark}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style= {{color: `${props.style.color}`}}>Dark Mode</label>
            </div>
            </div>
        </div>
        </nav>
        </>
    )
}

export default Navbar
