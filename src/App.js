import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Classes from './classes/App';
import Projects from './projects/Cookie';


export default class Principal extends Component{
	render(){
		return(
			<Router>
			<div>
			<Link to="/classes/App" className="btn">Go to the classes</Link>

			<br />
	
			<br />

			<Link to="/projects/Cookie" className="btn">Go to the projects</Link>

			<br />
			<br />
			<br />

			<Route path="/classes/" component={Classes} />
			<Route path="/projects/" component={Projects} />
			</div>
			</Router>
			);
	}
}