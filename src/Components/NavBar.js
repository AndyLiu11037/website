import React, {Component} from 'react'
import {Link, BrowserRouter as Router} from 'react-router-dom'

import './../App.css'
import './../fonts.css'
class NavBar extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg ">
                <div className="navbar-nav ml-5">
                    <Router>
                        <a className="nav-item nav-link"> <Link to="/home"></Link> Home <span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link" href="/about">About</a>
                        <a className="nav-item nav-link" href="/projects">Past Projects</a>
                    </Router>
                </div>
            </nav>
        )
    }
}
export default NavBar;