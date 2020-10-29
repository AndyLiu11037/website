import React, {Component} from 'react'
import {hot} from "react-hot-loader";


class Project extends Component{
    render(){
        return(
            <div>website is: {this.props.website} </div>
        )
    }
}
export default hot(module)(Project);