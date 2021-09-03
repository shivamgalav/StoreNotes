import React from 'react'

function Navbar(props) {
    
    return (
        <>
        <nav className={`navbar navbar-expand-lg navbar-light bg-${props.mode === false?"light":"dark"}`}>
        <div className="container-fluid">
            <a className="navbar-brand" href="/" style= {{color: `${props.style.color}`}}>StoreNotes</a>
            <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick = {props.setdark}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style= {{color: `${props.style.color}`}}>Dark Mode</label>
            </div>
        </div>
        </nav>
        </>
    )
}

export default Navbar
