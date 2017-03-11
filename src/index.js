import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import App from './App';
import './index.css';

firebase.initializeApp({
	apiKey: "AIzaSyD2YBekofCQ9F2mVC_JGdiHEwdoh4VEwtM",
    authDomain: "instagram-ba420.firebaseapp.com",
    databaseURL: "https://instagram-ba420.firebaseio.com",
    storageBucket: "instagram-ba420.appspot.com",
    messagingSenderId: "752156244636"
});
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
