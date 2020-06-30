import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Classes from './classes/';
import Projects from './projects/App';


export default class Principal extends Component{
	render(){
		return(
			<Router>
			<div>
			<Link to="/classes/" className="btn">Go to the classes</Link>

			<br />
			<br />
			<br />

			<Link to="/projects/App" className="btn">Go to the projects</Link>

			<Route path="/classes/" component={Classes} />
			<Route path="/projects/" component={Projects} />
			</div>
			</Router>
			);
	}
}