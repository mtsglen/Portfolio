import React from 'react';
import List from "../data/tech.json";

class Tech extends React.Component {
    render(){
      return (
        <div>
          <h1 className='techHeader'>My Technology Proficiencies</h1>
          <div className='techList'>
            {List.map(({tech})=>
              <ul className='techListShell'>
                <li className='techItem'>{tech}</li>
              </ul>
            )}
          </div>
        </div>
      );
    }
}
export default Tech;