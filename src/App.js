import React, { Component } from 'react';
import {hot} from "react-hot-loader";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import NavBar from './Components/NavBar.js';
import Intro from './Components/Intro.js';
import About from './About.js';
import Home from './Home.js';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts.css';
class App extends Component {
    //dont do intro if page refresh need to use session cookie
    //make a dark mode slider
    //change the colour of the text
    //background in intro should be white and fades to gradient
    
	constructor(props){
		super(props);
		this.state = {
			renderIntro: true,
		};
        this.unmountIntro = this.unmountIntro.bind(this);
	}
	componentWillUnmount() {
		clearInterval(this.interval);
    }
    unmountIntro(){
        this.setState({renderIntro: false});
    }
    render() {
      return (
        <div className="background">
        { this.state.renderIntro ? <Intro unmountIntro={this.unmountIntro}/> : 
            <div className="intro-fade">
                <Router>
                    <NavBar/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                    </Switch>
                </Router>
            </div>
        }
        </div>
      );
    }
  }
  export default hot(module)(App);