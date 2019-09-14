import React from 'react';
import Header from '../components/Header.js';
import Edu from '../components/Edu.js';
import '../../src/App.css';

class EduPage extends React.Component {
    render(){
      return (
        <div className='EduPage'>
            <Header/>
            <Edu/>
        </div>
      );
    }
}
export default EduPage;