import React, { Component } from 'react';
import './App.css';
import Navigation from './component/Navigation';
import Home from './component/Home';

class App extends Component {
  render() {
    return (
      <div>
      <Navigation />
     <Home />
      </div>
      
    );
  }
}

export default App;
