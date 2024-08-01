import React from 'react';
import customPolygon from "../../assets/icons/custom-btn-polygon.svg"

export default function CustomBtn() {
  return (
    <div className='custom-btn'>
        <div className='custom-btn__text'> 
            <p className='yellow'>Rooms</p>
            <p className='white center'>and</p>
            <p className='white'>apartments</p>
        </div>
        <a className='custom-btn__polygon' href="#!">
            <img src={customPolygon} alt="Polygon" />
        </a>
    </div>
  )
}
