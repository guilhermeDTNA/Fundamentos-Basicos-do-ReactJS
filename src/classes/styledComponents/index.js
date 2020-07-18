import React, {Component} from 'react';
import {Container, Head, SubTitle, Welcome} from './styles';

function App(){
		return(
			<Container>
			<Head>
			<a>Header</a>
			<br />
			</Head>

			<SubTitle>
			subtitle
			</SubTitle>

			<Welcome colorWelcome="00FF00" size={15}>
			Welcome to the system
			</Welcome>

			</Container>
			);
} 

export default App;