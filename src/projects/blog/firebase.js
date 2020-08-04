import app from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

import firebase from './fireConnection';

class Firebase{
	constructor(){
		  // Initialize Firebase
		  if (!app.apps.length) {

		  	app.initializeApp(firebase);

		  }
		  this.app = app.database();
		}

		login(email, password){
			return app.auth().signInWithEmailAndPassword(email, password);
		}

		async register(name, email, password){
			await app.auth().createUserWithEmailAndPassword(email, password);

			const uid = app.auth().currentUser.uid;

			return app.database().ref('usuarios').child(uid).set({
				nome: name
			})
		}

		isInitialized(){
			return new Promise(resolve =>{
				app.auth().onAuthStateChanged(resolve);
			})
		}
	}

	export default new Firebase();