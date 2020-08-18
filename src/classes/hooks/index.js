import React, {useState, useEffect, useMemo, useCallback} from 'react';

function App (){

	const [tasks, setTasks] = useState([
		'Pay ennergy bill',
		'Study React Hooks'
		]);

	const [input, setInput] = useState('');

	//useCallback is used to reuse a function within another function, instead of rebuild it 
	const handleAdd = useCallback(() => {
		setTasks([...tasks, input]);
		setInput('');
	}, [input, tasks]);

	//useMemo is used whenever you need run only one code part instead of running all the return method 
	const allTasks = useMemo(() => tasks.length, [tasks]);

	const [name, setName] = useState('Guilherme');

	/*UseEffect*/
	//It needs be parsed from JSON to string because data are stored in format JSON 

	/*This will be automatically runned because square brackets are empty, then this function looks like componentDidMount */
	useEffect(() => {
		const tasksStorage = localStorage.getItem('tasks');

		if(tasksStorage){
			setTasks(JSON.parse(tasksStorage));
		}

	}, []);

	//this will be runned whenever the state is updated
	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}, [tasks])

	return(

		<div>
		<ul>
		{tasks.map(task => (
			<li key={task}>{task}</li>
			))}
		</ul>

		<br />

		<strong>You have {allTasks} tasks! </strong><br/ >


		<input type="text" value={input} onChange={e => setInput(e.target.value)} />

		<button type="button" onClick={handleAdd}>Add</button>

		<h1>{name}</h1>
		</div>

		);
}

export default App;