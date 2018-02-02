import React, { Component } from 'react';
import './App.css';

import Navigation from "./components/Navigation/Navigation";
import Articles from "./components/Articles/Articles";
import Archive from "./components/Archive/Archive";
import Popular from "./components/Popular/Popular";
import Newsletter from "./components/Newsletter/Newsletter";
import About from "./components/About/About";

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Articles />
        <Archive />
        <Popular />
        <Newsletter />
        <About />
      </div>
    );
  }
}

export default App;
