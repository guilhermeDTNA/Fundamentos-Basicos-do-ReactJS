import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Error extends Component{
	render(){
		return(
			<div>
			<h2>Ops! Page not found!...</h2>
			<h3>You're searching for:</h3>
				<Link to="/">Home</Link><br />
				<Link to="/classes/components/routesClasses/pages/about">About</Link>
			</div>
		);
	}
	
}

export default Error;