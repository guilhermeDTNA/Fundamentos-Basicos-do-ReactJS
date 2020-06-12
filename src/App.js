import React, {Component} from 'react';

//Para constante é necessário passar as props por referência
const Bemvindo = (props) => {

	return(
		<div>
		<h2>Bem-vindo, {props.nome}, tenho {props.idade} anos</h2>
		</div>
		);
}

//Para classes é possível acessar as props só pelo "this", não precisa de referência
class Equipe extends Component{
	render(){
		return(

			<div>
			<Sobre nome={this.props.nome} cargo={this.props.cargo} idade={this.props.idade} />

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

class Sobre extends Component{
	render(){
		return(
			<div>
			<h2>Olá sou o(a) {this.props.nome} </h2>
			<h2>Cargo: {this.props.cargo}</h2>
			<h2>Idade: {this.props.idade}</h2>

			<hr/>
			</div>
		);
	}
} 

function App(){
	return (
		<div>
		<Bemvindo nome="Guilherme" idade="22" />

		<h1>Conheça nossa equipe: </h1>
		<Equipe nome="Lucas" cargo="Programmer" idade="29 anos" facebook="https://www.facebook.com/guilherme.rochaleite.9" />
		<Equipe nome="Daniel" cargo="Enginner" idade="20 anos" facebook="https://www.facebook.com/guilherme.rochaleite.9"/>

		</div>
		);
}


export default App;