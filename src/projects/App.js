import React, {Component} from 'react';

import './style.css';

class Button extends Component{
	render(){
		return(

			<div>
			<button onClick={this.props.actionBtn}>{this.props.name}</button>
			</div>

			);
	}
}

class Projects extends Component{

	constructor(props){
		super(props);
		this.state={
			textPhrase:''
		};

		this.breakCookie = this.breakCookie.bind(this);

		this.phrases = ['Siga os bons e aprenda com eles.', 'O bom-senso vale mais do que muito conhecimento.', 
		'O riso é a menor distância entre duas pessoas.', 
		'Deixe de lado as preocupações e seja feliz.',
		'Realize o óbvio, pense no improvável e conquiste o impossível.',
		'Acredite em milagres, mas não dependa deles.',
		'A maior barreira para o sucesso é o medo do fracasso.'];
	}

	breakCookie(){
		let state = this.state;
		let randomNumber = Math.floor(Math.random() * this.phrases.length);

		state.textPhrase = ' "'+this.phrases[randomNumber]+'" ';
		this.setState(state);
	}

	render(){
		return(

			<div className="container">
			<img src={require('./assets/biscoito.png')} className="img" />

			<Button name="Open cookie" actionBtn={this.breakCookie}/>
			<h3 className="textPhrase">{this.state.textPhrase}</h3>
			</div>

			);
	}
}

export default Projects;