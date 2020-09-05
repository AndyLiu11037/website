import React from 'react';
import './App.css';
import {hot} from "react-hot-loader";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar.js'
//Not actually the about Page
function App() {
	return (
		<div>
			<React.Fragment>
				<NavBar/>
				<div className="title-text">
					<a className="title">Andy Liu</a>
					<br></br>
					<a className="title-2">Software Developer</a>
				</div>
				


			</React.Fragment>
		</div>

			
		

    
  	);
}

export default hot(module)(App);
