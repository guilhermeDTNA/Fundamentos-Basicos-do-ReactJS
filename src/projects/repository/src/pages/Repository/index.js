import React, {useState, useEffect} from 'react';
import {FaArrowLeft} from 'react-icons/fa';

import api from '../../services/api';
import {Container, Owner, Loading, BackButton, IssuesList, PageActions, FilterList} from './styles';

export default function Repository({match}){
	
	const [repository, setRepository] = useState({});
	const [issues, setIssues] = useState([]);
	const [loading, setLoading] = useState(true);

	//Storage the currently pages
	const [page, setPage] = useState(1);

	const [filters, setFilters] = useState([
		{state: 'all', label: 'All', active: true},
		{state: 'open', label: 'Open', active: false},
		{state: 'closed', label: 'Closed', active: false},
	]);

	const [filterIndex, setFilterIndex] = useState(0);

	useEffect(() => {
		async function load(){
			const nameRepo = decodeURIComponent(match.params.repository);

			const [repositoryData, issuesData] = await Promise.all([
				api.get(`/repos/${nameRepo}`),
				api.get(`/repos/${nameRepo}/issues`, {
					params:{
						state: 'open',
						per_page: 5
					}
				})
			]);

			console.log(repositoryData.data);
			console.log(issuesData.data);
		
			setRepository(repositoryData.data);
			setIssues(issuesData.data);
			setLoading(false);
		}

		load();
	}, [match.params.repository]);

	//Whenever the page changes, this function is called
	useEffect(() => {
		async function loadIssue(){
			const nameRepo = decodeURIComponent(match.params.repository);

			const response = await api.get(`/repos/${nameRepo}/issues`, {
				params:{
					//Issues' state (all, open or closed)
					state: filters[filterIndex].state,
					page,
					per_page: 5,
				},
			});

			setIssues(response.data);
		}

		loadIssue();
	}, [filters, filterIndex, match.params.repository, page]);

	function handlePage(action){
		setPage(action === 'back' ? page - 1 : page + 1);
	}

	function handleFilter(index){
		setFilterIndex(index);
	}


	if(loading){
		return(
			<loading>
			<h1>Loading...</h1>
			</loading>
		);
	}

	return(
		
		<Container>

			<BackButton to="/projects/repository/">
				<FaArrowLeft color="#000" size={30} />
			</BackButton>

			<Owner>
				<img src={repository.owner.avatar_url} alt={repository.owner.login} />
				<h1>{repository.name}</h1>
				<p>{repository.description}</p>
			</Owner>

			<FilterList active={filterIndex}>
				{filters.map((filter, index) => (

					<button
					type="button" 
					key={filter.label}
					onClick={() => handleFilter(index)}
					>
					{filter.label}
					</button>

				))}
			</FilterList>

			<IssuesList>
			 {issues.map(issue => (
			 	<li key={String(issue.id)}>
			 		<img src={issue.user.avatar_url} alt={issue.user.login} />

			 		<div>
			 			<strong>
			 				<a href={issue.html_url}>{issue.title}</a>
			 				{issue.labels.map(label => (
			 					<span key={String(label.id)}>{label.name}</span>
			 				))}
			 			</strong>

			 			<p>{issue.user.login}</p>
			 		</div>

			 	</li>
			 ))}
			</IssuesList>

			<PageActions>
				<button type="button" onClick={() => handlePage('back')} disabled={page < 2}>
				Back
				</button>

				<button type="button" onClick={() => handlePage('next')}>
				Next
				</button>
			</PageActions>

		</Container>
	)
}