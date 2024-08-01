import React from 'react';

import sliderNext from "../../assets/slider/slider-next.svg";

export default function CustomSliderBtn({ swiperInstance }) {
  return (
    <button className='custom-slider-btn'  onClick={() => swiperInstance.slideNext()} >
      <img className='custom-slider-next' src={sliderNext} alt="Next slide" />
    </button>
  )
}
