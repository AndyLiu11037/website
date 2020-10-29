import React from 'react';
import {hot} from "react-hot-loader";
import Project from './Components/Project.js';
class Portfolio extends React.Component {

	render(){
		return (
				<div>
					<h1>Projects</h1>
					<Project website="https://github.com/AndyLiu11037/card-detector"></Project>
					<Project website="https://github.com/AndyLiu11037/website"></Project>
					<h1>Hackathons</h1>
					<Project website="https://github.com/maggie-x/forecast_hackathon18"></Project>
					<Project website="https://github.com/AndyLiu11037/SYNCS-hackathon"></Project>
				</div>
			
		);
	}

}
export default hot(module)(Portfolio);


