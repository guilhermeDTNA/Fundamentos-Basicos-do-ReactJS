import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component{
	render(){
		return(
			<div>
				<p>Header</p> <br />
				<Link to="/classes/components/routesClasses/pages/about">Go to About </Link>
				<hr />
			</div>
		);
	}
}

export default Header;