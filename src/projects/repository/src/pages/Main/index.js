import React, {useState, useCallback} from 'react';
import {FaGithub, FaPlus, FaSpinner} from 'react-icons/fa';

import {Container, Form, SubmitButton} from '../styles';
import api from '../../services/api';

export default function Main(){

	const [newRepo, setNewRepo] = useState('');
	const [repositories, setRepositories] = useState([]);
	const [loading, setLoading] = useState(false);

	function handleinputChange(e){
		setNewRepo(e.target.value);
	}

	const handleSubmit = useCallback((e) => {
		e.preventDefault();
		//As it's impossible to create an asynchronous useCallback, we can create a function inside the constant, this can be asynchronous 
		async function submit(){
			setLoading(true);
			try{
				const response = await api.get(`repos/${newRepo}`);

				const data = {
					name: response.data.full_time
				}

				setRepositories([...repositories, data]);
				setNewRepo('');
			} catch (error){
				console.log(error);
			} finally{
				setLoading(false);
			}

			
		}

		submit();
	}, [newRepo, repositories]); 

	

	return(
		<Container>
		<h1>
		<FaGithub size={25} />
		My repositories
		</h1>

		<Form onSubmit={handleSubmit}>

		<input type="text" placeholder="Add Repositories" value={newRepo} onChange={handleinputChange} />

		<SubmitButton loading={loading ? 1 : 0}>

		{loading ? (
			<FaSpinner color="#FFF" size={14} />
			) : (
			<FaPlus color="#FFF" size={14} />

			)}

			</SubmitButton>

			</Form>
			</Container>
			);
		}