import React, { Component } from 'react';
import './App.css';

import Navigation from "./components/Navigation/Navigation";
import Articles from "./components/Articles/Articles";

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Articles />
      </div>
    );
  }
}

export default App;
