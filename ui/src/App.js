import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { Component } from 'react';

const API_URL = 'http://localhost:8000/ping';

class App extends Component  {
  constructor(props) {
    super(props);

    this.state = {
      message: ""
    };
  }

  componentDidMount() {
    axios.get(API_URL).then(
      response => {
        console.log(response)
        this.setState({
          message: response.data.message
        });
      }
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
            {this.state.message}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
