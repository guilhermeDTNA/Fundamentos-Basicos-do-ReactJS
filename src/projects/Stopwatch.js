import React, {Component} from 'react';

import './style.css';

class App extends Component{

	constructor(props){
		super(props);

		this.state={
			number: 0,
			button: 'Start'
		}

		this.timer = null;
		this.start = this.start.bind(this);
		this.reset = this.reset.bind(this);
	}

	start(){
		let state = this.state;
		if(this.timer !== null){
			clearInterval(this.timer);
			this.timer = null;
			this.state.button = 'Start';
		} else{
			this.timer = setInterval(() =>{
			let state = this.state;
			state.number += 0.1;
			this.setState(state);
		}, 100);
			state.button = 'Pause';
		}
		this.setState(state);
		
	}

	reset(){
		if(this.timer !== null){
			clearInterval(this.timer);
			this.timer = null;
		}

		let state = this.state;
		state.number = 0;
		state.button = 'Start';
		this.setState(state);
	}

	render(){
		return(

			<div className="container-watch">
				<img src={require('./assets/cronometro.png')} className="img-watch" />
				<a className="timer">{this.state.number}</a>

				<div className="areaBtnWatch">
					<a className="btn-watch" onClick={this.start}>{this.state.button}</a>
					<a className="btn-watch" onClick={this.reset}>Reset</a>
				</div>
			</div>

		);
	}
}

export default App;