import React, {Component} from 'react'
import {Link, BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {hot} from "react-hot-loader";


class NavBar extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg ">
                <div className="navbar-nav ml-5">
                    <a className="nav-item nav-link"><Link to="/">Home</Link></a>
                    <a className="nav-item nav-link"><Link to="/about">About</Link></a>
                    <a className="nav-item nav-link"><Link to="">Past Projects</Link></a>
                </div>
            </nav>
        )
    }
}
export default hot(module)(NavBar);