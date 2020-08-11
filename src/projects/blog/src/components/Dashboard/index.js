import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

import firebase from '../../../firebase';
import './dashboard.css';

class Dashboard extends Component{
	constructor(props){
		super(props);
		this.state={
			name: localStorage.nome
		};

		this.logout = this.logout.bind(this);
	}

	logout = async () => {
		await firebase.logout()
		.catch((error) => {
			console.log(error);
		});

		localStorage.removeItem("nome");
	
		this.props.history.push('/projects/blog');
	}

	async componentDidMount(){

		//Verify if the user is logged, it uses a already created function in firebase class instead of create a new one
		if(!firebase.getCurrent()){
			this.props.history.replace('/projects/blog/login');

			return null;
		}

		//Catches callback from firebase and set state's name value
		firebase.getUserName((info) => {

			//localStorage saves the information in browser's storage for it doesn't load every time 
			localStorage.nome = info.val().nome;
			this.setState({name: localStorage.nome});
		})
	}

	render(){
		return(
			<div id="dashboard">
			<div className="user-info">
			<h1>Hello {this.state.name}</h1>
			<Link to="/projects/blog/dashboard/new">New Post</Link>
			</div>
			<p>Logged as: {firebase.getCurrent()}</p>

			<button onClick={() => this.logout()}>Logout</button>
			</div>
		);
	}
}

export default Dashboard;