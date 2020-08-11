import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

import './new.css';

class New extends Component{

	constructor(props){
		super(props);
		this.state={
			title: '',
			image: '',
			description: ''
		}
		this.addBlog = this.addBlog.bind(this);
	}

	addBlog(){

	}

	render(){
		return(
			<div>
			<header id="new">
				<Link to="/projects/blog/dashboard">Back</Link>
			</header>

			<form onSubmit={this.addBlog} id="newPost">
				<label>Title: </label><br />
				<input type="text" placeholder="Post's Name" value={this.state.title} autoFocus onChange={(e) => this.setState({title: e.target.value})} /><br />
			
				<label>Image's URL</label>
				<input type="text" placeholder="Cover's URL" value={this.state.image} onChange={(e) => this.setState({description: e.target.value})} /> <br />

				<button type="submit">Add</button>
			</form>

			</div>
		);
	}
}

export default withRouter(New);