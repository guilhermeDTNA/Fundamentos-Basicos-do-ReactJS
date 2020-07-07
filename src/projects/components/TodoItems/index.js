import React, {Component} from 'react';

export default class App extends Component{

	constructor(props){
		super(props);
		this.state={

		};
		this.delete = this.delete.bind(this);
	}

	delete(key){
		this.props.delete(key);
	}

	render(){

		return(
			<div>
			<ul>
			{this.props.list.map((item)=>{
				return(
					<li onClick={()=>this.delete(item.key)} key={item.key}> {item.text} </li>
				);
			})}
			</ul>
			</div>
		);
	}
}