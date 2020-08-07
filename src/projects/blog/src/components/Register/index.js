import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import firebase from '../../../firebase';
import './register.css';

class Register extends Component{

	constructor(props){
		super(props);
		this.state = {
			name: '',
			email: '',
			password: ''
		};

		this.register = this.register.bind(this);
		this.onRegister = this.onRegister.bind(this);
	}

	register(e){
		e.preventDefault();

		this.onRegister();
	}

	onRegister = async() => {
		try{
			const {name, email, password} = this.state;

			await firebase.register(name, email, password);
			this.props.history.replace('/projects/blog/dashboard');

		}catch(error){
			alert(error.message);
		}
	}

	render(){
		return(
			<div>
				<h1 className="register-h1">New User</h1>

				<form onSubmit={this.register} id="register">
					<label>Name:</label><br />
					<input type="text" value={this.state.name} autoFocus autoComplete="off" placeholder="Your name" onChange={(e) => this.setState({name: e.target.value})} />
				
					<br />
					<label>Email:</label><br />
					<input type="text" value={this.state.email} autoFocus autoComplete="off" placeholder="test@test.com" onChange={(e) => this.setState({email: e.target.value})} />

					<br />
					<label>Password:</label><br />
					<input type="text" value={this.state.password} autoComplete="off" placeholder="Your password" onChange={(e) => this.setState({password: e.target.value})} />

					<br />
					<button type="submit">Add</button>
				</form>
			</div>
			);
		}
	}

	export default withRouter(Register);