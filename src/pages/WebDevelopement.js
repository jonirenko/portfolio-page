import React from 'react';
import removeLater from '../images/pos.jpg';

function WebDevelopement() {
  return (
    <div className='webdev-container'>
      <div className='webdev'>
        <div className='webdev-text'>
          <div>
              <h1>My Skills In Web Developement</h1>
          </div>
          <div>
            <h2>ReactJS & React Native</h2>
            <p>
              Blablablablablabla ReactJS/React Native blablablablbalbalbal
            </p>

            <h2>WordPress</h2>
            <p>
              blblablabllalblal WordPress böaöbaöblalblbalab
            </p>

            <h2>Other Programming Skills</h2>
            <p>
              blablbalbalablbal programming languages balbalbalblbla
            </p>
          </div>
        </div>
        <div className='webdev-images'>
          <img src={removeLater} alt='Oops, this is not supposed to be here' className='webdev-img'/>
        </div>
      </div>
    </div>
  )
}

export default WebDevelopement;