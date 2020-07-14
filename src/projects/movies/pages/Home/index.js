import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Header from '../../components/Header';
import './home.css';

class Home extends Component{

	constructor(props){
		super(props);
		this.state={
			movies:[]
		};
		
		this.loadMovies = this.loadMovies.bind(this);
	}

	componentDidMount(){
		this.loadMovies();
	}

	loadMovies(){
		//https://sujeitoprogramador.com/r-api/?api=filmes/
		let url = 'https://sujeitoprogramador.com/r-api/?api=filmes/';
		fetch(url)
		.then((r) => r.json())
		.then((json) => {
			this.setState({movies: json});
			console.log(json);
		});
	}

	render(){
		return(
			<div>
			<div>
			<Header />
			</div>
			<div className="">

			<div className="list-movies">
			{this.state.movies.map((filme) => {
				return(
					<article key={filme.id} className="movie">
					<strong>{filme.nome}</strong>
					<img src={filme.foto} alt="Cover" />
					<Link to={`/projects/movies/${filme.id}`}>Access</Link>
					</article>
					)
			})}
			</div>

			</div>
			</div>
			);
	}
}

export default Home;