import React, {Component} from 'react';

import TodoItems from '../TodoItems';

export default class TodoList extends Component{
	
	constructor(props){
		super(props);

		this.state={
			task:'',
			items: []
		};

		this.addItem = this.addItem.bind(this);
		this.log = this.log.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
	}

	deleteItem(key){
		console.log('Item to be dropped: ' + key);
		let filter = this.state.items.filter((item) => {
			return(item.key !== key);
		})

		this.setState({items: filter});
	}

	addItem(e){
		let state = this.state;
		if(this._taskInput.value !== ''){
			let newItem = {
				text: this._taskInput.value,
				key: Date.now() 
			};

			this.setState({items: [...state.items, newItem]});
		}
		this.setState({task:''});

		e.preventDefault();
	}

	log(){
		console.log(this.state.items);
	}

	render(){

		return(

			<div>
			<form onSubmit={this.addItem}>
			<input type="text" placeholder="New task" name="tasks" value={this.state.task} onChange={ (e) => this.setState({task: e.target.value})} ref={(event) => this._taskInput = event}  />
			
			<button type="submit"> Add </button>

			</form>

			<button onClick={this.log}>Log</button>

			<TodoItems list={this.state.items} delete={this.deleteItem} />
			

			</div>

			);
		}
	}