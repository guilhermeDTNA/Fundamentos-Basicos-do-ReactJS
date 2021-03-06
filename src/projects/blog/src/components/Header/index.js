import React from 'react';
import {Link} from 'react-router-dom';

import './header.css';

function Header(){
	return(
		<header id="main-header">
		<div className="header-content">
		<Link to="/projects/blog">
		Blog Programmer
		</Link>
		<Link to="/projects/blog/login">
		Login
		</Link>
		</div>
		</header>
		);
	}

	export default Header;