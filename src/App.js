import React, { Component } from 'react';
import firebase from 'firebase';
import './App.css';

class App extends Component {

  constructor (){
    super();
    this.state = {
      user: null
    };
  }
  handleAuth() {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
    .then(result => console.log(`${result.user.email} ha iniciado sesión`))
    .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }

  renderLoginButton(){
    //si elusuario está logueado

    //Si no lo está
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Instagram</h2>
        </div>
        <p className="App-intro">
        <button onClick={this.handleAuth}>Login Con Google</button>
        </p>
      </div>
    );
  }
}

export default App;
