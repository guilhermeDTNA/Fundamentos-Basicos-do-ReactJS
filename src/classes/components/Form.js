import React, {Component} from 'react';

class App extends Component{
	
	constructor(props){
		super(props);
		this.state={
			name: '',
			email: '',
			pass: '',
			error:''
		};
		this.add = this.add.bind(this);
	}

	add(event){
		const {name, email, pass} = this.state;

		if(name !== '' && email!=='' && pass!==''){
		alert(`Name: ${name} \nE-mail: ${email} \nPassword: ${pass}`);//Join string and variables
	}
	else{
		this.setState({error: 'Ops, it seems missing something'})
	}

	event.preventDefault();

}

render(){

	return (

		<div>
		<h1>New user</h1>

		{this.state.error && <p>{this.state.error}</p>}
		<form onSubmit={this.add}>
		<label>Name:</label>
		<input type="text" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})} /> <br />

		<label>E-mail:</label>
		<input type="email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} /> <br />

		<label>Password:</label>
		<input type="password" value={this.state.pass} onChange={(e) => this.setState({pass: e.target.value})} />

		<br/>
		<button type="submit">Add</button>

		</form>

		</div>
		);

}
}

export default App;