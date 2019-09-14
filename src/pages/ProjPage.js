import React from 'react';
import Header from '../components/Header'
import Project from '../components/Proj.js'
import '../../src/App.css';

class ProjPage extends React.Component {
  render(){
    return (
      <div id='Proj'>
        <Header/>
        <Project/>
      </div>
    );
  }
}
export default ProjPage;