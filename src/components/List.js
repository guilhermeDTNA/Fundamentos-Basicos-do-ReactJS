import React, {Component} from 'react';
import Feed from './feed';

export default class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			feed:[
			{id:1, username:'Guilherme', likes:10, comments:2},
			{id:2, username:'Lucas', likes:120, comments: 24},
			{id:3, username:'Amanda', likes:30, comments: 12}
			]
		}
	}
	render(){
		return(

			<div>
			{this.state.feed.map((item) => {
				return(
					<Feed key={item.id} username={item.username} likes={item.likes} comments={item.comments} />	
				)
			})}
			</div>

			);
		}

	
}