import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Introduction from './Introduction';
import Requests from './requests/Requests';

export default class App extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<Router>
			<div>
			<Link to="./Introduction" className="btn">Go to the basic fundamentals</Link>

			<br />
			<br />

			<Link to="/requests/Requests" className="btn">Go to the requests classes</Link>

			<br />
			<br />
			<br />

			<Route path="" component={Introduction} />
			<Route path="/requests/" component={Requests} />
			</div>
			</Router>
		);
	}
}
