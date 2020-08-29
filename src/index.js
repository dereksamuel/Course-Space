// const element = document.createElement('button');
// element.innerText = 'Click Me';

// const app = document.getElementById('root');
// app.appendChild(element);

import firebase from 'firebase';
import conf from './utils/firebaseConfig';
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import App from './components/App';
import './index.css';
import './images/style.css';

firebase.initializeApp(conf);
const firebaseui = require('firebaseui');
const firestore = firebase.firestore();

// const element = React.createElement('button', {
//   type: 'submit',
//   className: 'btn',
//   onClick: setAwait,
// }, `Fifaifou ${setAwait.timer > 0 ? `huele feo`: `no se nada`}`);
const container = document.getElementById('root');

ReactDOM.render(
  <App db={firestore} login={firebaseui} service={firebase}></App>, container);

// const card2 = document.getElementById('cards');
// const NavBar = document.querySelector('.NavBar');
// let intersectionElement;

// debugger
// if (card2.children.length > 4) {
//   intersectionElement = card2.children[2];
//   const observer = new IntersectionObserver((entries, observer) => {
//     if (entries[0].isIntersecting) {
//       NavBar.style = 'display: none;';
//       card2.style = 'height: calc(100vh - 114px);';
//     } else {
//       NavBar.style = 'display: flex;';
//     }
//   }, {
//     // root,
//     // rootMargin,
//     threshold: 1,
//   });
//   observer.observe(intersectionElement);
// } else {
//   console.log('No estoy dentro');
// }
