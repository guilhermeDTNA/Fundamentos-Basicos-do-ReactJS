import React, {Component} from 'react';

import Member from './components/member/';
import Input from './components/input';
import Form from './components/Form';


//To constants is necessary send the props through reference
const Welcome = (props) => {

	return(
		<div>
		<h2>Welcome, {props.name}, you have {props.age} years old.</h2>
		</div>
		);
}

//To classes it is possible view the props just by "this", it doesn't need reference
class Staff extends Component{
	render(){
		return(

			<div>
			<About name={this.props.name} office={this.props.office} age={this.props.age} />

			<Social facebook={this.props.facebook} />
			</div>

			);
	}
} 

class Social extends Component{
	render(){
		return(
			<div>
			<a href={this.props.facebook}><i>Facebook</i></a>
			<a>Linkedin</a>
			<a>YouTube</a>
			</div>
			);
	}
}

class About extends Component{
	render(){
		return(
			<div>
			<h2>Hello, I'm {this.props.name} </h2>
			<h2>Office: {this.props.office}</h2>
			<h2>Age: {this.props.age}</h2>

			<hr/>
			</div>
			);
	}
} 

class Classes extends Component{

	constructor(props){
		super(props);
		this.state={
			name: 'Teste',
			counter: 0,
			time: '00:00:00'
		}

		this.increase = this.increase.bind(this);
		this.decrease = this.decrease.bind(this);
	}

//this function is executed only one time 
	componentDidMount(){
		setInterval(()=>{
			this.setState({time: new Date().toLocaleTimeString() })
		});
	}

	//This function is called always that a state is updated
	componentDidUpdate(){
		//console.log('Some state was updated');
	}


	increase(){
		let state = this.state;
		state.counter++;
		this.setState(state);
	}

	decrease(){
		let state = this.state;

		if(state.counter === 0){
			alert("Unfortunately the counter assumed zero value, then it's impossible to continue");
			return;
		}

		state.counter--;
		this.setState(state);
	}

	render(){
		return (
			<div>
			<div>
			<Welcome name="Guilherme" age="22" />

			<h1>Meet our staff: </h1>
			<Staff name={this.state.name} office="Programmer" age="29 years old" facebook="https://www.facebook.com/guilherme.rochaleite.9" />
			<Staff name="Daniel" office="Enginner" age="20 years old" facebook="https://www.facebook.com/guilherme.rochaleite.9"/>

			</div>
			<div>
			<h2>Counter</h2>
			<h3>
			<button onClick={this.decrease}>-</button>
			{this.state.counter}
			<button onClick={this.increase}>+</button>
			</h3>
			</div>

			<Member name="Guest" />

			<Input />

			<Form />


			<div>
				{this.state.time}
			</div>

			</div>
			);
	}}


	export default Classes;