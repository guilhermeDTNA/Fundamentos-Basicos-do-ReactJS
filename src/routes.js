import React, {Component} from 'react';
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

import HomeBlog from './projects/blog/src/components/Home';
import HeaderBlog from './projects/blog/src/components/Header';
import FirebaseBlog from './projects/blog/firebase';

import {authenticated} from './projects/movies/auth';



/*This route verify if the visitor is authenticated, getting the component which he'll redirected and its props*/
const PrivateRoute = ({component: Component, ...rest}) => (
	<Route {...rest} render={props => (
		//if he is authenticated...
		authenticated() ? (
			<Component {...props} />
			) : (
			//otherwise, go to home, state:... means that the history navigation will be available 
			<Redirect to={{pathname: '/', state: {from: props.location}}} />
			)
			)} />
	)

class Routes extends Component {
	
	state = {
		firebaseInitialized: false
	};

	componentDidMount(){
		FirebaseBlog.isInitialized().then(result => {
			//return the user
			this.setState({firebaseInitialized: result});
		})
	}

	render(){
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



			/*TO VIEW THE PAGE 404, PLEASE COMMENT THE CODE BELOW*/
			/*This part verify if the user is logged in the blog*/
			{this.state.firebaseInitialized !== false ?

				<div>
				<HeaderBlog /> 
				<Route exact path="/projects/blog" component={HomeBlog} />
				</div>
				
				: 

				<div>
				<h1>Loading</h1>
				

			</div>
		}

		<Route path="*" component={MistakeRoutes} />

			</Switch>
			</BrowserRouter>

			);
	}
}

export default Routes;