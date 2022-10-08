import React from 'react'
import PropTypes from 'prop-types'
// import {Link}  from 'react-router-dom'

export default function Navbar(props) {

  return (
    <>
    
        <nav className={`navbar navbar-expand-lg`} style={{backgroundColor: props.mode==='success'? '#006800' : props.mode==='dark'? 'black' : props.mode==='danger'? '#c70000' : '#f9f9f9'}}>
            <div className="container-fluid">
                <a className="navbar-brand" style={{color: props.mode!=='light'? 'white' : 'black' }} href="#">{props.logo}</a>
                {/* <Link className="navbar-brand" style={{color: props.mode!=='light'? 'white' : 'black' }} to="/">{props.logo}</Link> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" style={{color: props.mode!=='light'? 'white' : 'black' }} aria-current="page" href="#">Home</a>
                        {/* <Link className="nav-link active" style={{color: props.mode!=='light'? 'white' : 'black' }} aria-current="page" to="/">Home</Link> */}
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" style={{color: props.mode!=='light'? 'white' : 'black' }} href="#">{props.about}</a>
                        {/* <Link className="nav-link" style={{color: props.mode!=='light'? 'white' : 'black' }} to="/about">{props.about}</Link> */}
                        </li>
                    </ul>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}

                    <div className='d-flex'>
                    
                    {/* <button className='btn btn-success' onClick={()=>{props.dark('success')}} style={{height: '20px', width: '20px'}}></button> */}
                    
                    <input type="checkbox" className="btn-check" onClick={props.green} id="green-button" autocomplete="off" />
                    <label className="btn btn-sm btn-outline-success me-2" style={{backgroundColor: 'green', color: 'white'}}  for="green-button">Green Palette</label><br />

                    <input type="checkbox" className="btn-check" onClick={props.red} name="options-outlined" id="red-button" autocomplete="off" />
                    <label className="btn btn-sm btn-outline-danger me-3" style={{backgroundColor: 'red', color: 'white'}} for="red-button">Red Palette</label>
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" onClick={props.dark} role="switch" id="dark-button" />
                        <label className="form-check-label" style={{color: props.mode==='light'? 'black' : 'white'}} htmlFor="dark-button">{props.mode==='light'? 'Enable Dark Mode' : props.mode==='success'? 'Enable Dark Mode' : props.mode==='danger'? 'Enable Dark Mode' : 'Enable Light Mode' }</label>
                    </div>
                </div>
            </div>
        </nav>

    </>
  )
}

Navbar.prototypes = {
    logo: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    logo: "My New Text Utility",
    about: "Default About"
}