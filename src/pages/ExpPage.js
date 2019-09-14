import React from 'react';
import Header from '../components/Header'
import Experience from '../components/Exp.js'
import '../../src/App.css';

class ExpPage extends React.Component {
  render(){
    return (
      <div id='Exp'>
        <Header/>
        <Experience/>
      </div>
    );
  }
}
export default ExpPage;