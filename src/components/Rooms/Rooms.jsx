import React, { useRef, useEffect, useState }  from 'react';
import RoomsSlider from './RoomSlider';
import RoomsSliderMobile from './RoomSliderMobile';

export default function Rooms() {

  return (
    <section className='rooms'>
        <div className='container'>
          
          <div className='rooms__text'>
            <h2 className='title rooms__title'>Rooms <br /> &&nbsp;apartments</h2>
            <h2 className='title rooms__title-mobile'>Rooms & <br /> apartments</h2>
            <h4 className='rooms__description'>All room decoration was made with ecological certified and safe materials.</h4>
          </div>

          <div className='rooms-slider__wrapper'>
            <RoomsSlider />
            <RoomsSliderMobile />
          </div>
          <div className='rooms__divider'></div>
        </div>
    </section>
  )
}
