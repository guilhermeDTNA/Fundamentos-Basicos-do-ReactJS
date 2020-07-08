import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Introduction from './Introduction';
import Requests from './requests/Requests';

/*Including files to routes*/
import Header from './components/header/';
import Home from './components/pages/home/';
import About from './components/pages/about/';

import Routes from './components/routes';

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


			<Home />
			<Routes />

			<Route path="" component={Introduction} />
			<Route path="/requests/" component={Requests} />
			
			</div>
			</Router>
		);
	}
}
