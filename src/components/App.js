import React from 'react';
import Header from './Header.js';
import Home from './Home.js';
import Contact from './Contact.js'

import '../../src/App.css';

class App extends React.Component { 
  render(){
    return (
      <div className="App">
        <Header/>
        <Home/>
        <Contact/>
      </div>
    );
  }
}

export default App;
