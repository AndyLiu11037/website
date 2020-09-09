import React from 'react';
import {hot} from "react-hot-loader";
import 'animate.css';
class Home extends React.Component {

	render(){
		return (
				<React.Fragment>{/*
							When using svg line drawing animation, need to add strok="colour"*/}

						
						
				<div className="website-name animate__animated animate__bounce">Andy Liu's Resume</div>
				<div className="title-text">
					<p className="title">I'm Andy Liu</p>
					<p className="title-2">Software Developer</p>

				</div>
				<br></br>
				<p className="title-2">Dabble in everything</p>

				</React.Fragment>
			
		);
	}

}
export default hot(module)(Home);


