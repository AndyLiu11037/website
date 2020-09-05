import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar.js'
import {hot} from "react-hot-loader";
import 'animate.css'
function App() {
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


			</React.Fragment>
		</div>

			
		

    
  	);
}

export default hot(module)(App);
