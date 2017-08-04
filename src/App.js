import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="http://www.telestream.net/images/home/logo-product-wirecast-go.png" className="App-logo" alt="logo" />
          <h1>Hank's Hardware</h1>
        </div>

        <HomePage />
      </div>
    );
  }
}

export default App;
