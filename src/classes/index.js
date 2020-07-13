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

			<hr />
			</div>
		);
	}
}
