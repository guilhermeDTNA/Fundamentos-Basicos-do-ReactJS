import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';
import Header from './header';
import Mistake from './pages/error/';

import Product from './pages/product';

const Routes = () => {
	return(
		<BrowserRouter>
		<Switch>
		<Route exact path="/" component={Home} />
		<Route path="/about" component={About} />
		<Route path="/header" component={Header} />

		<Route path="/product/:id" component={Product}/>

		<Route path="*" component={Mistake} />
		</Switch>
		</BrowserRouter>
		);
}

export default Routes;