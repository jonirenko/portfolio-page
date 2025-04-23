import React from 'react';
import photo from "../images/homepage-pic.jpg";
import { BioText } from '../components/BioText';

function Home() {
  return (
    <div className='home-container'>
        <div className='home-photo-container'>
           <img src={photo} alt='Joni Renko' className='home-photo'/>
        </div>

        <div className='home-bio-container'>
            <div className='home-bio'>
                <div className='bio-text'>
                    <h1>Who is Joni Renko?</h1>

                   <BioText />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home;