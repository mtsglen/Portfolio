import React from 'react';
import Proj from "../data/projects.json";
import '../../src/App.css';

class Project extends React.Component {
    render(){
      return (
        <div className='projects'>
          {Proj.map(({project, description, github, link, image})=>
            <div className='project'>
              <img classname='pic' src={image} alt={project}/>
              <h2>{project}</h2>
              {description.map((items)=>
                <ul>
                  <li>{items}</li>
                </ul>
              )}
              <button className="btn btn-secondary">
                <a href={link} target="_blank" rel="noopener noreferrer">Website</a> 
              </button>
              <button className="btn btn-secondary">
                <a href={github} target="_blank" rel="noopener noreferrer">Github Page</a></button>
            </div>
          )}
        </div>
      );
    }
}
export default Project;