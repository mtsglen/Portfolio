import React from 'react';
import { FontAwesomeIcon,  } from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
// import {faPaperPlane} from '@fortawesome/free-regular-svg-icons'
import '../../src/App.css';



export default class Icon extends React.Component {
  
    render() {
      return (
        <div className='Icon'>
          <a href="https://github.com/mtsglen" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="3x" onHover='blue'/>
          </a>
          <a href="https://www.linkedin.com/in/stephanie-glendenning/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </a>
          {/* <FontAwesomeIcon icon={faPaperPlane} size="2x" /> */}
        </div>
      );
    }
  }

