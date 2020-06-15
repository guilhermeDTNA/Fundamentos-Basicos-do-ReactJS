import React, {Component} from 'react';

export default class Input extends Component{

	constructor(props){
		super(props);

		this.state={
			email:'',
			password:''
		}

		this.changeGenre = this.changeGenre.bind(this);
	}

	changeGenre(e){
		let valueTyped = e.target.value;
		this.setState({genre: valueTyped});
	}

	render(){
		return(
			<div>
			<div>
			<h2>Login</h2>
			Email:
			<input type="email" name="email" value={this.state.email} onChange={(e)=>this.setState({email: e.target.value})} /> <br/>
			
			Password:
			<input type="password" name="password" value={this.state.password} onChange={(e)=>this.setState({password: e.target.value})} /> <br/>

			Genre:
			<select name="genre" value={this.state.genre} onChange={this.changeGenre}>
			<option value="male">Male</option>
			<option value="female">Female</option> 
			</select>
			</div>
			<div>
			<h3>{this.state.email}</h3>
			<h3>{this.state.password}</h3>
			<h3>{this.state.genre}</h3>
			</div>
			</div>
			);
	}
}