import React from 'react';
import {HashLink as Link} from 'react-router-hash-link';

function Header(){
	return(
		<header>
		<div className="menu" id="home">

		<nav>
			<ul>
			<li><Link smooth to="#home">Home</Link></li>
			<li><Link smooth to="#about">About</Link></li>
			<li><Link smooth to="#contact">Contact</Link></li>
			</ul>
		</nav>

		</div>

		</header>
	);
}

export default Header;