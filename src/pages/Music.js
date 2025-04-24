import React from 'react';
import { SongwritingText } from '../components/SongwritingText';
import { ProductionText } from '../components/ProductionText';
import { PromoText } from '../components/PromoText';

function Music() {
  return (
    <div className='music-container'>
      <div className='music'>
        <div className='music-text'>
          <h1>My Skills In Music</h1>

          <SongwritingText />
          <ProductionText />
          <PromoText />
          
        </div>
      </div>
    </div>
  )
}

export default Music;