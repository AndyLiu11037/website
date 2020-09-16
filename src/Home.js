import React from 'react';
import {hot} from "react-hot-loader";
import 'animate.css';
class Home extends React.Component {

	render(){
		return (
				<div>{/*
							When using svg line drawing animation, need to add strok="colour"*/}

						
						
				<div className="website-name animate__animated animate__bounce">Andy Liu's Resume</div>
				<div className="home-title">
					<p className="title">I'm Andy Liu</p>
					<p className="title-2">Software Developer</p>
				</div>
				<br></br>
				<div className="interest">
					<p className="title">Interests</p>
					<ul className="text">
						<li>Software Development</li>
						<li>Cyber Security</li>
						<li>Neural networks kinda</li>
					</ul>
				</div>

				</div>
			
		);
	}

}
export default hot(module)(Home);


