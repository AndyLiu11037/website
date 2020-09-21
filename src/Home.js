import React from 'react';
import {hot} from "react-hot-loader";
import 'animate.css';
class Home extends React.Component {

	render(){
		return (
				<div>{/*
							When using svg line drawing animation, need to add strok="colour"*/}

						
						
					
					<div className="title-screen">
						<div className="home-title">
							<p className="title">I'm Andy Liu</p>
							<p className="title-2">Software Developer</p>
						</div>
					</div>
					<div className="about">
						<p className="title">About Me</p>
						<p className="text">I'm a recent graduate from the University of New South Wales studying Computer Science. I have quite a few interests 
											that I pursue in my spare time relating to tech and other things. I'm always learning new things from doing my own projects, 
											whether it be a pure programming project, Arduino projects or even just following tutorials to further my understanding in new areas.
											Feel free to contact me about opportunities or to have a chat through <a className="text" href="https://www.linkedin.com/in/andy-liu-375aa117b/">LinkedIn</a> or my email:andyliu11037@gmail.com.
											 </p>
					</div>
					<div className="website-name animate__animated animate__bounce">Andy Liu's Resume</div>
					<br></br>
					<div className="interest">
						<p className="title">Interests</p>
						<ul className="text">
							<li>Software Development</li>
							<li>Cyber Security</li>
							<li>Neural networks kinda</li>
							<li>Psychology</li>
						</ul>
					</div>
					<div className="portfolio">
						<p className="title">Portfolio</p>

						<p className="text"> My Personal Projects</p>
					</div>

				</div>
			
		);
	}

}
export default hot(module)(Home);


