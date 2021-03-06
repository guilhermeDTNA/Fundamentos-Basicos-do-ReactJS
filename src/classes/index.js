import React, {Component} from 'react';
import {Link} from 'react-router-dom';


export default class Classes extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div>
			
			<Link to="/classes/introduction">Go to basic classes </Link> <br />

			<Link to="/classes/form">Go to classes about Forms </Link> <br />

			<Link to="/classes/list">Go to classes about Lists </Link> <br />	

			<Link to="/classes/styled-components/">Go to classes about Styled Component </Link> <br />	

			<Link to="/classes/single-page-application/">Go to classes about Single Page Application </Link> <br />	

			<Link to="/classes/firebase">Go to classes about Firebase managing </Link> <br />

			<Link to="/classes/hooks">Go to classes about Hooks </Link> <br />

			<hr />
			</div>
		);
	}
}
