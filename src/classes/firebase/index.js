import React, {Component} from 'react';

import firebase from './fireConnection';

class App extends Component{
  constructor(props){
    super(props);

    this.state={
      emailAdd: '',
      passAdd: '',
      emailLogin: '',
      passLogin: ''
    }

    this.addUser = this.addUser.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);

    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        alert('User successfully logged in! \n Email:' + user.email);
      }
    })
  }

  addUser(e){

    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.pass)
    .catch((error) => {
      if(error.code === 'auth/invalid-email'){
        alert('Invalid Email!');
      }
      else if(error.code === 'auth/weak-password'){
        alert('Weak Password!');
      }
      else{
        alert('Error Code: '+error.code);
      }
    })

    e.preventDefault();
  }

  login(e){

    firebase.auth().signInWithEmailAndPassword(this.state.emailLogin, this.state.passLogin)
    .catch((error) => {
      if(error.code === 'auth/wrong-password'){
        alert('Incorrect Password!');
      } else{
        alert('Error Code: '+error.code);
      }
    })

    e.preventDefault();
  }

  logout(){
    firebase.auth().signOut();
    alert("You've been disconnected");
  }

  render(){
    return(
      <div>
      <form onSubmit={this.addUser}>
      <label>Email</label><br />
      <input type="text" value={this.state.emailAdd} onChange={(e) => this.setState({emailAdd: e.target.value})} /> <br />

      <label>Password</label><br />
      <input type="password" value={this.state.passAdd} onChange={(e) => this.setState({passAdd: e.target.value})} /> <br />

      <button type="submit"> Add </button>
      </form>

      <br /><br /><br />

      <h1>Login</h1>
      <form onSubmit={this.login}>
      <label>Email</label><br />
      <input type="text" value={this.state.emailLogin} onChange={(e) => this.setState({emailLogin: e.target.value})} /> <br />

      <label>Password</label><br />
      <input type="password" value={this.state.passLogin} onChange={(e) => this.setState({passLogin: e.target.value})} /> <br />

      <button type="submit"> Login </button>
      </form>

      <br />
      <button onClick={this.logout}>Logout</button>
      </div>
      );
  }
}

export default App;