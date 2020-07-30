import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from './Home';

//Importing files from classes
import Classes from './classes/';
import Introduction from './classes/Introduction';
import Form from './classes/components/Form';
import List from './classes/components/List';
import RoutesClasses from './classes/components/routesClasses';
import Requests from './classes/requests/Requests';
import StyledComponents from './classes/styledComponents';

import SinglePageApplication from  './classes/components/singlePageApplication/Home';
import SinglePageApplicationHeader from  './classes/components/singlePageApplication/Header';

//Importing files from routes classes
import HomeRoutes from './classes/components/routesClasses/pages/home';
import AboutRoutes from './classes/components/routesClasses/pages/about';
import HeaderRoutes from './classes/components/routesClasses/header';
import ProductRoutes from './classes/components/routesClasses/pages/product/';
import MistakeRoutes from './classes/components/routesClasses/pages/error';

//importing files from connection with Firebase
import FirebaseClasses from './classes/firebase/';

//Importing files from projects
import Projects from './projects/';
import Cookie from './projects/Cookie';
import Stopwatch from './projects/Stopwatch';
import TodoList from './projects/TodoList';
import HomeMovies from './projects/movies/pages/Home/';
import Movie from './projects/movies/pages/Movie/';
import {autenticated} from './projects/movies/auth';


const PrivateRoute = ({component: Component, ...rest}) => (
	<Route {...rest} render={props => (
		autenticated() ? (
			<Component {...props} />
		) : (
			<Redirect to={{pathname: '/', state: {from: props.location}}} />
		)
	)} />
)


const Routes = () => {
	return(

		<BrowserRouter>

		<Route path="/" component = {()=> <p>Pages</p>} />

		<Switch>

		<Route exact path="/" component={Home} />

		<Route exact path="/projects" component={Projects} />
		<Route path="/projects/cookie" component={Cookie} />
		<Route path="/projects/stopwatch" component={Stopwatch} />
		<Route path="/projects/todo-list" component={TodoList} />
		<Route exact path="/projects/movies/:id" component={Movie} />

		<PrivateRoute exact path="/projects/movies/" component={HomeMovies} />

		

		<Route exact path="/classes" component={Classes} />
		<Route path="/classes/introduction" component={Introduction} />
		<Route path="/classes/form" component={Form} />
		<Route path="/classes/list" component={List} />
		<Route path="/classes/requests" component={Requests} />
		<Route path="/classes/styled-components" component={StyledComponents} />
		<Route exact path="/classes/single-page-application/" component={SinglePageApplication} />
		<Route path="/classes/routes" component={RoutesClasses} />
		
		<Route path="/classes/routes/home" component={HomeRoutes} />
		<Route path="/classes/routes/about" component={AboutRoutes} />
		<Route path="/classes/routes/header" component={HeaderRoutes} />
		<Route path="/classes/routes/product/:id" component={ProductRoutes} />

		<Route path="/classes/firebase" component={FirebaseClasses} />

		<Route path="*" component={MistakeRoutes} />

		</Switch>
		</BrowserRouter>

		);
}

export default Routes;