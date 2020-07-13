import React, {Component} from 'react';
import {Link} from 'react-router-dom';


//<Link to="/classes">Go to Classes </Link> <br />

export default class Home extends Component{
	render(){
		return(
			<div>				

				<Link to="/projects/">Go to Projects </Link> <br />
				<Link to="/classes/">Go to Classes </Link>

				<hr />
			</div>
		);
	}
}