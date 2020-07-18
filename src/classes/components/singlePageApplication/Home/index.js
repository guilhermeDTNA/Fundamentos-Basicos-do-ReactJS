import React from 'react';

import '../style.css';
import Start from '../Start';
import About from '../About';
import Contact from '../Contact';
import Header from '../Header';

function Home(){
	return(
		<div>
			<Header />
			<Start />
			<About />
			<Contact />
		</div>
	);
}

export default Home;