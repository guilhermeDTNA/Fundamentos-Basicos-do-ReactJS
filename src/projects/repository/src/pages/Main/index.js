import React, {useState, useCallback, useEffect} from 'react';
import {FaGithub, FaPlus, FaSpinner, FaBars, FaTrash} from 'react-icons/fa';
import {Link} from 'react-router-dom';

import {Container, Form, SubmitButton, List, DeleteButton} from '../styles';
import api from '../../services/api';

export default function Main(){

	const [newRepo, setNewRepo] = useState('');
	const [repositories, setRepositories] = useState([]);
	const [loading, setLoading] = useState(false);
	const [alert, setAlert] = useState(null);

	//Search
	useEffect(() => {
		const repoStorage = localStorage.getItem('repos');
		setRepositories(JSON.parse(repoStorage));
	}, []);

	//Save updates in localStorage
	useEffect(() => {
		localStorage.setItem('repos', JSON.stringify(repositories));
	}, [repositories]);

	const handleSubmit = useCallback((e) => {
		e.preventDefault();
		//As it's impossible to create an asynchronous useCallback, we can create a function inside the constant, this can be asynchronous 
		async function submit(){
			setLoading(true);
			setAlert(null);
			try{

				if(newRepo === ''){
					throw new Error('You need point a repository!');
				}

				const response = await api.get(`repos/${newRepo}`);

				//This row verify all positions in repositories if the typed name exists already 
				const hasRepo = repositories.find(repo => repo.name === newRepo);

				if(hasRepo){
					throw new Error('Double repository!');
				}

				const data = {
					name: response.data.full_name
				}

				setRepositories([...repositories, data]);
				setNewRepo('');
			} catch (error){
				console.log(error);
				setAlert(true);
			} finally{
				setLoading(false);
			}

			
		}

		submit();
	}, [newRepo, repositories]); 

	
	function handleinputChange(e){
		setNewRepo(e.target.value);
		setAlert(null);
	}
	
	//Filter all repositories and return that different 
	const handleDelete = useCallback((repo) => {
		const find = repositories.filter(r => r.name !== repo);
		setRepositories(find);
	}, [repositories]);

	return(
		<Container>
		<h1>
		<FaGithub size={25} />
		My repositories
		</h1>

		<Form onSubmit={handleSubmit} error={alert}>

		<input type="text" placeholder="Add Repositories" value={newRepo} onChange={handleinputChange} />

		<SubmitButton loading={loading ? 1 : 0}>

		{loading ? (
			<FaSpinner color="#FFF" size={14} />
			) : (
			<FaPlus color="#FFF" size={14} />

			)}

			</SubmitButton>

			</Form>


			<List>
				{repositories.map(repo => (
					<li key={repo.name}>
						
						<span>
						<DeleteButton onClick={() => handleDelete(repo.name)}>
							<FaTrash size={14} />
							</DeleteButton>
						{repo.name}
						</span>

						<Link to={`/projects/repository/${encodeURIComponent(repo.name)}`}>
							<FaBars size={20}/>
						</Link>
					</li>
				))}
			</List>

			</Container>
			);
		}