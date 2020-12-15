import React from 'react';
import {hot} from "react-hot-loader";
import Project from './Components/Project.js';
import './Portfolio.css';

import cardImage from './img/card.jpg';
import websiteImage from './img/website.jpg';
import CSEImage from './img/forecast.jpg';
import syncsImage from './img/sync hackathon.jpg';

class Portfolio extends React.Component {
	constructor(props){
		super(props);
	}
	
	render(){
		return (
				<div>
					{/* need to make a div which encompasses the title and project bodies, make it a transparent white*/}
					<div className="project-hackathon-title">Projects</div>
					<div className="projects-container">
						<Project name="Playing card reader" website="https://github.com/AndyLiu11037/card-detector" img={cardImage} ></Project>
						<Project name="This website" website="https://github.com/AndyLiu11037/website" img={websiteImage}></Project>
					</div>

					<div className="project-hackathon-title">Hackathons</div>
					<div className="hackathon-container">
						<Project name="UNSW CSE hackathon" website="https://github.com/maggie-x/forecast_hackathon18" img={CSEImage}></Project>
						<Project name="SYNCS hackathon" website="https://github.com/AndyLiu11037/SYNCS-hackathon" img={syncsImage}></Project>
					</div>

				</div>
			
		);
	}

}
export default hot(module)(Portfolio);


