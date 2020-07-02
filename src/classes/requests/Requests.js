import React, {Component} from 'react';

import './style.css';

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			nutri: []
		}
	}


componentDidMount(){
	let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
	fetch(url)
	.then((r)=>r.json())
	.then((json)=>{
		let state = this.state;
		state.nutri = json;
		this.setState(state);
		//console.log(json);
	})
}

render(){
	return(
		<div className="container-API">

		<header>Catching data from an API</header>


			{this.state.nutri.map((item) => {
				return(
					<article key={item.id} className="post-API">
						<strong className="title-API">{item.titulo}</strong>
						<img className="cover-API" src={item.capa} />
						<p className="subtitle-API">{item.subtitulo}</p>
						<a className="button-API">Access</a>
					</article>
				);
			})}

		</div>
	);
}
}

export default App;