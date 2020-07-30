import React, {Component} from 'react';

import firebase from './fireConnection';

class App extends Component{
	
	constructor(props){
		super(props);
		this.state={
			nameInput: '',
			ageInput: '',
			tokenInput: '',
			token: 'Loading',
			name: '',
			age: '',
			list: []
		};

		this.add = this.add.bind(this);


  	/* Scout 
  	firebase.database().ref('token').on('value', (snapshot) => {
  		let state = this.state;
  		state.token = snapshot.val();
  		this.setState(state);
  	})
  	*/
  	/*Manage token*/
  	firebase.database().ref('token').on('value', (snapshot) => {
  		let state = this.state;
  		state.token = snapshot.val();
  		this.setState(state);
  	});

  	/*Manage name and age*/
  	firebase.database().ref('usuarios').child(1).on('value', (snapshot) => {
  		let state = this.state;
  		state.name = snapshot.val().nome;
  		state.age = snapshot.val().idade;
  		this.setState(state);
  	});

  	/*Manage a list*/
  	firebase.database().ref('usuarios').on('value', (snapshot) => {
  		let state = this.state;
  		state.list = [];

  		snapshot.forEach((childItem) => {
  			state.list.push({
  				key: childItem.key,
  				name: childItem.val().nome,
  				age: childItem.val().idade,
  			});
  		});

  		this.setState(state);
  	})

  }

  add(e){

  	/*Inserting a new token*/
  	//firebase.database().ref('token').set(this.state.tokenInput);

  	/*Updating the age*/
  	//firebase.database().ref('usuarios').child(1).child('idade').set(this.state.tokenInput);

  	/*Deleting the office*/
  	//firebase.database().ref('usuarios').child(1).child('cargo').remove();

  	let users = firebase.database().ref('usuarios');
  	let key = users.push().key;

  	users.child(key).set({
  		nome: this.state.nameInput,
  		idade: this.state.ageInput
  	});

  	//don't refresh page 
  	e.preventDefault();
  }

  render(){
  	const {token, name, age} = this.state;

  	return(
  		<div>

  		<div>

  		<form onSubmit={this.add}>
  		<input type="text" value={this.state.nameInput} onChange={(e) => this.setState({nameInput: e.target.value})} />

  		<br />
  		<input type="text" value={this.state.ageInput} onChange={(e) => this.setState({ageInput: e.target.value})} />

  		<br />
  		<button type="submit">Add</button>
  		</form>

  		<p>Token: {token}</p>
  		<p>Name: {name}</p>
  		<p>Age: {age}</p>

  		</div>

  		<br /><br /><br /><br />

  		{this.state.list.map((item) => {
  			return(
  				<div>
  				<h3>ID: {item.key} </h3>
  				<h1>Hello {item.name} </h1>
  				<h2>Age: {item.age} years old </h2>

  				</div>
  				);

  		})}

  		</div>
  		);
  }
}

export default App;