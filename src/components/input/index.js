import React, {Component} from 'react';

export default class Input extends Component{

	constructor(props){
		super(props);

		this.state={
			email:'',
			password:'',

			form:{
				name:'',
				email:'',
				password:'',
				genre:''
			}
		}
		this.dataForm = this.dataForm.bind(this);
		this.changeGenre = this.changeGenre.bind(this);
	}

	changeGenre(e){
		let valueTyped = e.target.value;
		this.setState({genre: valueTyped});
	}

	dataForm(e){
		let form = this.state.form;
		form[e.target.name] = e.target.value;

		this.setState({form:form});
	}

	render(){
		return(
			<div>
			<div>
			<h2>Login</h2>
			
			Name:
			<input type="text" name="name" value={this.state.form.name} onChange={this.dataForm} /> <br />

			Email:
			<input type="email" name="email" value={this.state.form.email} onChange={this.dataForm} /> <br/>
			
			Password:
			<input type="password" name="password" value={this.state.form.password} onChange={this.dataForm} /> <br/>

			Genre:
			<select name="genre" value={this.state.form.genre} onChange={this.dataForm}>
			<option value="male">Male</option>
			<option value="female">Female</option> 
			</select>
			</div>
			<div>
			<h3>{this.state.form.email}</h3>
			<h3>{this.state.form.password}</h3>
			<h3>{this.state.form.genre}</h3>
			</div>
			</div>
			);
	}
}