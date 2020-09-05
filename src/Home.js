import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar.js';
import {hot} from "react-hot-loader";
import 'animate.css';
import anime from 'animejs'
class Home extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			value: null,
		};
	}
	componentDidMount(){
		anime({
			targets: '.test',
			translateX:'13rem',
			rotate:180,
			borderRadius:'8px',
			loop:true,
			duration: 4000
		});
	}
	render(){
		return (
			<div>
				<React.Fragment>

					<div> {/*make a div wrapper for fade in the whole page 
							When using svg line drawing animation, need to add strok="colour"*/}
					<NavBar/>

					
					<div className="website-name animate__animated animate__bounce">Andy Liu's Resume</div>
					<div className="title-text">
						<a className="title">Andy Liu</a>
						<br></br>
						<a className="title-2">Software Developer</a>
						<br></br>
						<a className="title-2">Dabble in everything</a>
					</div>
					<div className="test"></div>
					<div className="test"></div>
					<div className="test"></div>
					</div>

				</React.Fragment>
			</div>
			
		);
	}

}
export default hot(module)(Home);


