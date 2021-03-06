import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

import './new.css';
import firebase from '../../../firebase';

class New extends Component{

	constructor(props){
		super(props);
		this.state={
			title: '',
			image: null,
			url: '',
			description: '',
			alert: '',
			progress: 0
		}
		this.addBlog = this.addBlog.bind(this);
		this.handleFile = this.handleFile.bind(this);
		this.handleUpload = this.handleUpload.bind(this);
	}

	componentDidMount(){
		if(!firebase.getCurrent()){
			this.props.history.replace('/projects/blog/');

			return null;
		}
	}

	addBlog = async(e) => {
		e.preventDefault();

		if(this.state.title !== '' && this.state.image !== '' && this.state.description !== '' && this.state.image !== null && this.state.url!==''){
			let posts = firebase.app.ref('posts');
			let key = posts.push().key;

			await posts.child(key).set({
				titulo: this.state.title,
				image: this.state.url,
				descricao: this.state.description,
				autor: localStorage.nome
			});

			this.props.history.push('/projects/blog/dashboard');
		}

		else{
			this.setState({alert: 'Fill in all the fields'})
		}
	}

	handleFile = async (e) => {
		if(e.target.files[0]){
			const image = e.target.files[0];

			if(image.type === 'image/png' || image.type === 'image/jpeg' ){
				await this.setState({image: image});
				this.handleUpload();
			} else{
				alert('Send a image which has PNG or JPG type');
				this.setState({image: null});
				return null;
			}
		}


	}

	handleUpload = async () => {
		const {image} = this.state;
		const currentUid = firebase.getCurrentUid();

		console.log('ID: '+currentUid);

		const uploadTaks = firebase.storage
		.ref(`images/${currentUid}/${image.name}`)
		.put(image);

		await uploadTaks.on('state_changed', 
			(snapshot) => {
				//progress
				const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
				this.setState({progress}) //As the variables have the same name, we can pass only one time the one
			},
			(error) => {
			//error
		},
		() => {
			firebase.storage.ref(`images/${currentUid}`)
			.child(image.name).getDownloadURL()
			.then(url => {
				this.setState({url: url});
			})
		})
	}

	render(){
		return(
			<div>
			<header id="new">
			<Link to="/projects/blog/dashboard">Back</Link>
			</header>

			<form onSubmit={this.addBlog} id="newPost">

			<span>{this.state.alert}</span>

			<input type="file" onChange={this.handleFile}/> <br />

			{this.state.url !== '' ? 
				<img src={this.state.url} width="90" />

				:
				<progress value={this.state.progress} max="100" />
		}

			<label>Title: </label><br />
			<input type="text" placeholder="Post's Name" value={this.state.title} autoFocus onChange={(e) => this.setState({title: e.target.value})} /><br />
			
			<label>Description: </label><br />
			<input type="text" placeholder="Post's Description" value={this.state.des
			} autoFocus onChange={(e) => this.setState({description: e.target.value})} /><br />

			<button type="submit">Add</button>
			</form>

			</div>
			);
	}
}

export default withRouter(New);