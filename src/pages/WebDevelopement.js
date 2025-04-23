import React from 'react';
import { ReactText } from '../components/ReactText';
import { WordpressText } from '../components/WordpressText';
import { OtherSkills } from '../components/OtherSkills';

function WebDevelopement() {
  return (
    <div className='webdev-container'>
      <div className='webdev'>
        <div className='webdev-text'>
          <div>
              <h1>My Skills In Web Developement</h1>
          </div>
          <div>
            
            <ReactText />
            <WordpressText />
            <OtherSkills />

          </div>
        </div>
      </div>
    </div>
  )
}

export default WebDevelopement;