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
    render() {
      return (
        <React.Fragment>
        { this.state.renderIntro ? <Intro /> : 
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
        </React.Fragment>
      );
    }
  }
  export default hot(module)(App);