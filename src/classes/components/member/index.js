import React, {Component} from 'react';

import List from '../List';

class App extends Component{
	
	constructor(props){
		super(props);

		this.state={
			nome: props.name
		}

		this.login = this.login.bind(this);
	}

	login(name){
		this.setState({name: name});
	}

	render(){
		return(

			<div>
				<h2>Welcome {this.state.name} </h2>
				<button onClick={()=>this.login('Lucas')}> Login </button> //Must be anonymous function cause the function would be called before the click instead of after 
				<button onClick={()=>this.setState({name: ''})}> Logout </button> 

				<br></br>
				<List />
			</div>

		);
	}
}

export default App;