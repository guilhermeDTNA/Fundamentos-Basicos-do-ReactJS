import React from 'react';
import {HashLink as Link} from 'react-router-hash-link';

function Contact(){
	return(
		<div className="home" id="contact">
			<h1>Contact us</h1>
			<h2>Phone: (XX) 9 9999-9999</h2>
			<h3>Address: Some street, nº13</h3>

			<Link smooth to="#home" style={{color:'#FFF'}}>Go to Home </Link> <br />
			<Link smooth to="#about" style={{color:'#FFF'}}>Go to About </Link>
		</div>
	);
}

export default Contact;