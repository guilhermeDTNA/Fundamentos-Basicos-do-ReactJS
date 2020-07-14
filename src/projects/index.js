import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Projects extends Component{

	render(){
		return(
			<div>
			<Link to="/projects/cookie">Go to Cookie project </Link> <br />

			<Link to="/projects/stopwatch">Go to Stopwatch project </Link> <br />

			<Link to="/projects/todo-list">Go to Todo List project </Link> <br />

			<Link to="/projects/movies">Go to Movie project </Link> <br />				
			<hr />
			</div>
			);
		}
	}