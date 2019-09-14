import React from 'react';
import Data from "../data/jobs.json";

class Experience extends React.Component {
    render(){
      return (
        <div className='work'>
          {Data.map(({company, title, time, duties, resp})=>
            <div>
              <h1 className='company'>{company}</h1>
              {title.map((title, index)=>
                <div key={index}>
                  <h2 className='title'>{title}</h2>
                  <h3 className='time'>{time[index]}</h3>
                  {duties[index].map((resp)=>
                    <ul className='list'>
                      <li className='resp' >{resp}</li>
                    </ul>
                  )}
                  </div>
              )}
            </div>
            )} 
          <div id='additional'>
            <p>To see additional experience of mine, please visit my <a href="https://www.linkedin.com/in/stephanie-glendenning/" target="_blank" rel="noopener noreferrer">LinkedIn</a> page.</p>
          </div>
        </div>
      );
    }
}
export default Experience;