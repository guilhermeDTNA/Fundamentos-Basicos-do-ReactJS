import React, {Component} from 'react';

export default class Feed extends Component{
	render(){
		return(
			<div key={this.props.id}>
				<h3>{this.props.username}</h3>
				<a>{this.props.likes} likes / {this.props.comments} comments </a>
				<hr/>
			</div>
		);
	}
}