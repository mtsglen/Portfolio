import React from 'react';
import Header from '../components/Header.js'
import Tech from '../components/Tech'

class TechPage extends React.Component {
    render(){
      return (
        <div className='TechPage'>
            <Header/>
            <Tech/>
        </div>
      );
    }
}
export default TechPage;