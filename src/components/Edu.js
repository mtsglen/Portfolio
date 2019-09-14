import React from 'react';
import '../../src/App.css';

class Edu extends React.Component {  

    render(){
      return (
        <div className='Edu'>
            <div id='uden'>
                <h1>University Of Denver</h1>
                <h2>Center for Professional Development</h2>
                <h3>Course Completion - July 2018</h3>
                <h3>Web Development Boot Camp</h3>
                <button className="btn btn-secondary"> 
                 <a href="https://bootcamp.du.edu/coding/" target="_blank" rel="noopener noreferrer" type="button" >Bootcamp website</a></button>
            </div>
            <div id='umt'>
                <h1>University Of Montana</h1>
                <h2>Bachaleor of Arts - Graduated June 2009</h2>
                <h3>Major in Sociology with an emphasis in Criminology </h3>
                <h3>Minor in Psychology</h3> 
                <button className="btn btn-secondary"> 
                <a href="http://www.umt.edu/" target="_blank" rel="noopener noreferrer">University Website</a></button>
                  
                 <br/>
                 <button className="btn btn-secondary">
                <a href='http://hs.umt.edu/sociology/' target='_blank' rel="noopener noreferrer">UMT Sociology Department Website</a></button>
                <br />
                <button className="btn btn-secondary"> <a href='http://hs.umt.edu/psychology/' target='_blank' rel="noopener noreferrer">UMT Psychology Department Website</a></button>
            </div>
        </div>
      );
    }
}
export default Edu;