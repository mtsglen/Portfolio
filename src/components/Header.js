import React from "react";
import NavBar from "./NavBar.js"
import Icon from "./IconBar.js"

class Header extends React.Component {
  render(){
    return(
      <header className="top">
        <h1 id='name'>
            Stephanie Glendenning
        </h1>  
        <div className='bar'>
            <NavBar/>
            <Icon/>
        </div>
      </header>
    ); 
  }
};

export default Header;