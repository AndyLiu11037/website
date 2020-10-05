import React from 'react';
import {hot} from "react-hot-loader";
import 'animate.css';
import Observer from '@researchgate/react-intersection-observer';

class Home extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			interestVisibility: 'hidden',
		}
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event){
		console.log(event);
		this.setState({
			interestVisibility: event.isIntersecting ? 'visible' : 'invisible',
		});
	};
	
	render(){
		const options = {
			onChange: this.handleIntersection,
			root: 'title-page',
			rootMargin:''
		}
		return (
				<div className="title-page">{/*
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
					<Observer onChange={this.handleChange}>
					<br></br>
					</Observer>
					{
						this.state.interestVisibility==='visible' 
						? 						
						<div className="interest animate__animated animate__fadeInLeft">
								<p className="title">Interests</p>
								<ul className="text">
									<li>Software Development</li>
									<li>Cyber Security</li>
									<li>Neural networks kinda</li>
									<li>Psychology</li>
								</ul>
						</div>
						: 
						null
					}

							<div className="portfolio">
								<p className="title">Portfolio</p>
								<p className="text"> My Personal Projects</p>
							</div> 
							
					<div className="website-name animate__animated animate__fadeInLeft">Andy Liu's Resume</div>
				</div>
			
		);
	}

}
export default hot(module)(Home);


