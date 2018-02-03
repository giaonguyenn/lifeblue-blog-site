import React, { Component } from 'react';
import './App.css';

import Navigation from "./components/Navigation/Navigation";
import Articles from "./components/Articles/Articles";
import Archive from "./components/Archive/Archive";
import Popular from "./components/Popular/Popular";
import Newsletter from "./components/Newsletter/Newsletter";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="main">
        <div className="nav">
          <Navigation />
        </div>
        <div className="body">
          <Articles />
          <Archive />
          <Popular />
          <Newsletter />
          <About />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
