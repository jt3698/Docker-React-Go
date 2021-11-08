import 'react-app-polyfill/ie11'; // For IE 11 support
import 'react-app-polyfill/stable';
import 'core-js';
import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { icons } from './assets/icons'

import { Provider } from 'react-redux'
import store from './store'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

React.icons = icons

const firebaseConfig = {
  apiKey: "AIzaSyACkBeqgvqYdIeZ8HVzxCk0-ASPq5L_fik",
  authDomain: "docker-react-go.firebaseapp.com",
  projectId: "docker-react-go",
  storageBucket: "docker-react-go.appspot.com",
  messagingSenderId: "401764100397",
  appId: "1:401764100397:web:f88e60a895b80c8a588ba4",
  measurementId: "G-VP6YH14F00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
