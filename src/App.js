import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Body from './components/Body'

class App extends Component {
  render() {
    return (
        <div>
          <Navigation />
          <div className="App">
          </div>
          <Body />
        </div>
      );
    }
}

export default App;
