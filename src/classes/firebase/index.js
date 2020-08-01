import React, {Component} from 'react';

import firebase from './fireConnection';

class App extends Component{
  constructor(props){
    super(props);

    this.state={
      nameAdd: '',
      emailAdd: '',
      passAdd: '',
      emailLogin: '',
      passLogin: '',
      user: null
    }

    this.addUser = this.addUser.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.auth = this.auth.bind(this);

    //firebase.auth().signOut();

    
  }

  componentDidMount(){
    this.auth();
  }

  auth(){
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        //alert('User successfully logged in! \n Email:' + user.email);
        /*
        firebase.database().ref('usuarios').child(user.uid).set({
          nome: this.state.nameAdd
        })
        .then(() => {
          this.setState({nameAdd: '', emailAdd: '', passAdd: ''});
        })
        */

        this.setState({user: user});
      }
    })
  }

  addUser(e){

    firebase.auth().createUserWithEmailAndPassword(this.state.emailAdd, this.state.passAdd)
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

    this.setState({nameAdd: '', passAdd: '', emailAdd: ''});

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
    firebase.auth().signOut()
    .then(() => {
      this.setState({user: null});
    })
    //alert("You've been disconnected");
    //window.location.reload();
  }

  render(){
    return(
      <div>

      {this.state.user ?
        <div>
        <h2>You are logged</h2><br />
        <h1>New User</h1>
        <form onSubmit={(e)=>{this.addUser(e)}}>

        <label>Name</label><br />
        <input type="text" value={this.state.nameAdd} onChange={(e) => this.setState({nameAdd: e.target.value})} /> <br />

        <label>Email</label><br />
        <input type="text" value={this.state.emailAdd} onChange={(e) => this.setState({emailAdd: e.target.value})} /> <br />

        <label>Password</label><br />
        <input type="password" value={this.state.passAdd} onChange={(e) => this.setState({passAdd: e.target.value})} /> <br />

        <button type="submit"> Add </button>

        <br /><br />
        <button onClick={this.logout}>Logout</button>
        </form>

        </div> :

        <div>
        <h2>You are not logged</h2><br />
        <h1>Login</h1>
        <form onSubmit={this.login}>
        <label>Email</label><br />
        <input type="text" value={this.state.emailLogin} onChange={(e) => this.setState({emailLogin: e.target.value})} /> <br />

        <label>Password</label><br />
        <input type="password" value={this.state.passLogin} onChange={(e) => this.setState({passLogin: e.target.value})} /> <br />

        <button type="submit"> Login </button>
        </form>
        </div>

      }
      
      </div>
      );
  }
}

export default App;