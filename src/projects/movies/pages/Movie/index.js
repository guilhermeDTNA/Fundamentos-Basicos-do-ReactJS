import React, {Component} from 'react';

import './movie-info.css';

class Movie extends Component{
	
	constructor(props){
		super(props);
		this.state = {
			movie:[]
		}
	}

	componentDidMount(){
		//Catch the params sent by the index from the Home folder
		const {id} = this.props.match.params;
		let url = `https://sujeitoprogramador.com/r-api/?api=filmes/${id}`;

		fetch(url)
		.then((r) => r.json())
		.then((json) => {
			this.setState({movie: json});
			console.log(json);
		})
	}

	render(){
		return(
			<div className="movie-info">
				<h1> {this.state.movie.nome} </h1>

				<img src={this.state.movie.foto} />

				{this.state.movie.length !== 0 &&
					<h3>Sinopse</h3>
				}
				
				{this.state.movie.sinopse}
			</div>
		);
	}
}

export default Movie;