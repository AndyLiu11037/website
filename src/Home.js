import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar.js';
import {hot} from "react-hot-loader";
import 'animate.css';
import Anime, {anime} from 'react-anime';
class Home extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			value: null,
		};
	}

	render(){
		return (
			<div>
				<React.Fragment>
					<NavBar/>

					
					<div className="website-name animate__animated animate__bounce">Andy Liu's Resume</div>
					<div className="title-text">
						<a className="title">Andy Liu</a>
						<br></br>
						<a className="title-2">Software Developer</a>
						<br></br>
						<a className="title-2">Dabble in everything</a>
					</div>
	
					<Anime translateX={'13rem'}
							rotate={anime.rotate=180}
							borderRadius={'8px'}
							duration={anime.duration=2000}
							loop={anime.loop=true}>
						<div className="test"></div>
					</Anime>
				</React.Fragment>
			</div>
		);
	}

}
export default hot(module)(Home);


