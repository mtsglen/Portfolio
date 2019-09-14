import React from 'react';
import { Link } from "react-router-dom"; 
import '../../src/App.css';

class NavBar extends React.Component {
    render(){
      return (
        <div className='Nav'>
            <Link to='/' className="homepage">Home</Link>
            <Link to='/Education' className="edu">Education</Link>
            <Link to='/Experience' className="exp">Experience</Link>
            <Link to='/Projects' className="proj">Projects</Link>
            <Link to='/Technology' className="tech">Technology</Link>
        </div>
        // <Icon/>
      );
    }
}
export default NavBar;