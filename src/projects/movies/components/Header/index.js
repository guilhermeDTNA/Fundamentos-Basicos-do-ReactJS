import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './header.css';

class Header extends Component{

	render(){
		return(
			<div>
			<div className="header">
				<Link to="/projects/movies/"> Movies</Link>

			</div>
			<div>
			<hr />
			</div>
			</div>

		);
	}
}

export default Header;