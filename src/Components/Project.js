import React, {Component} from 'react';
import {hot} from "react-hot-loader";
import { Textfit } from 'react-textfit';
import './../Portfolio.css';

class Project extends Component{
    
    render(){
        return(
            <div className="project">
                <a href={this.props.website}>
                    <div className="card" >
                        <div style={{backgroundImage: 'url('+this.props.img+')'}} className="card-body">
                        </div>
                    </div>

                    <div className="project-text">       
                        <Textfit mode="multi">
                            {this.props.name}
                        </Textfit> 
                    </div>
                </a>
            </div>

            
        )
    }
}
export default hot(module)(Project);