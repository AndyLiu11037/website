import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar.js';
import Intro from './Components/Intro.js';
import {hot} from "react-hot-loader";
import 'animate.css';
import anime from 'animejs';

class Home extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			renderIntro: true,
		};
        this.interval = null;
	}
	componentDidMount(){
		this.interval = setTimeout(() => this.setState({renderIntro: false}),7000);
	}
	componentWillUnmount() {
		clearInterval(this.interval);
	}   
	render(){
		return (
			<div>
				
				<React.Fragment>
				{ this.state.renderIntro ? <Intro /> : 
					<div className="intro-fade"> {/*
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
					</div>
				}
				</React.Fragment>
			</div>
			
		);
	}

}
export default hot(module)(Home);


