import React from 'react';
import {hot} from "react-hot-loader";
import {Link} from 'react-router-dom'
import 'animate.css';
import Observer from '@researchgate/react-intersection-observer';

class Home extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			interestVisibility: 'invisible',
			aboutVisibility: 'invisible',
			portfolioVisibility: 'invisible',
		}
		this.handleInterest = this.handleInterest.bind(this);
		this.handleAbout = this.handleAbout.bind(this);
		this.handlePortfolio = this.handlePortfolio.bind(this);
	}

	handleAbout(event){
		if (this.state.aboutVisibility==='invisible') {
			this.setState({
				aboutVisibility: event.isIntersecting ? 'visible' : 'invisible',
			});
		}
	};

	handleInterest(event){
		if (this.state.interestVisibility==='invisible') {
			this.setState({
				interestVisibility: event.isIntersecting ? 'visible' : 'invisible',
			});
		}
	};
	
	handlePortfolio(event){
		//console.log(event);
		console.log(this.state.portfolioVisibility);
		if (this.state.portfolioVisibility==='invisible') {
			this.setState({
				portfolioVisibility: event.isIntersecting ? 'visible' : 'invisible',
			});
		}
	};

	render(){
		return (
				<div className="title-page">{/*
							When using svg line drawing animation, need to add strok="colour"*/}
					<div className="title-screen">
						<div className="home-title">
							<p className="title">I'm Andy Liu</p>
							<p className="title-2">Software Developer</p>
						</div>
					</div>
					<Observer onChange={this.handleAbout}>
					<br></br>
					</Observer>
					{
						this.state.aboutVisibility==='visible' 
						?
						<div className="about-section">
							<div className="about animate__animated animate__fadeInLeft">
								<p className="title">About Me</p>
								<p className="text">I'm a recent graduate from the University of New South Wales studying Computer Science. I have quite a few interests 
													that I pursue in my spare time relating to tech and other things. I'm always learning new things from doing my own projects, 
													whether it be a pure programming project, Arduino projects or even just following tutorials to further my understanding in new areas.
													Feel free to contact me about opportunities or to have a chat through <a className="text" href="https://www.linkedin.com/in/andy-liu-375aa117b/">LinkedIn</a> or my email:andyliu11037@gmail.com.
								</p>
							</div>
						</div>

						:
						null
					}	
					<Observer onChange={this.handleInterest}>
					<br></br>
					</Observer>
					{
						this.state.interestVisibility==='visible' 
						?
						<div className="interest-section"> 
							<div className="interest animate__animated animate__fadeInLeft">
									<p className="title">Interests</p>
									<ul className="text">
										<li>Software Development</li>
										<li>Cyber Security</li>
										<li>Neural networks kinda</li>
										<li>Psychology</li>
									</ul>
							</div>
						</div> 						
						: 
						null
					}
					<Observer onChange={this.handlePortfolio}>
					<br></br>
					</Observer>
					{
						this.state.portfolioVisibility==='visible'
						?
						<div className="portfolio-section animate__animated animate__fadeInLeft">
							<div className="portfolio">
								<p className="title">Portfolio</p>
								<p className="text"> <Link to="/portfolio">Past Projects</Link></p>
								
							</div> 
						</div>
						:
						null
					}


				</div>
			
		);
	}

}
export default hot(module)(Home);


