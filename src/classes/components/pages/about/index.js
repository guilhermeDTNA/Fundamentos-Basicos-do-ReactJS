import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class About extends Component{
	render(){
		return(
			<div>
				<p>About page...</p>

				<Link to="/">Go to Home</Link>
			</div>
		);
	}
}

export default About;