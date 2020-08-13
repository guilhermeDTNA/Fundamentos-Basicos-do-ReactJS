import React, {Component} from 'react';
import firebase from '../../../firebase';
import './home.css';

class Home extends Component{
	state={
		posts: []
	}

	componentDidMount(){
		firebase.app.ref('posts').once('value', (snapshot) => {
			let state = this.state;
			state.posts = [];

			snapshot.forEach((childItem) => {
				state.posts.push({
					key: childItem.key,
					title: childItem.val().titulo,
					image: childItem.val().image,
					description: childItem.val().descrição,
					author: childItem.val().autor,
				})
			});
			state.posts.reverse();
			this.setState(state);
		})
	}

	render(){
		return(
			<section id="post">
				{this.state.posts.map((post) => {
					return(
						<article key={post.key}>
							<header className="title">
							<div>
								<strong>{post.title}</strong>
								<span>Author: {post.author}</span>
							</div>
							</header>
							<img src={post.image} alt="Post cover" />

							<footer>
							<p>{post.description}</p>
							</footer>
						</article>
					);
				})}
			</section>
		)
	}
}

export default Home;