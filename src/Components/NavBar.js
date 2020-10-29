import React from 'react'
import {Link} from 'react-router-dom'
import {hot} from "react-hot-loader";


function NavBar(){
    return(
        <nav className="navbar navbar-expand-lg ">
            <div className="navbar-nav ml-5">
                <a className="nav-item nav-link"><Link to="/">Home</Link></a>
                <a className="nav-item nav-link"><Link to="/portfolio">Past Projects</Link></a>
            </div>
        </nav>
    )
}
export default hot(module)(NavBar);