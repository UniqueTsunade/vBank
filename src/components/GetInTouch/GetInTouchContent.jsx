import React from 'react';
import starImg from "../../assets/get-in-touch/star.svg";


export default function GetInTouchContent() {
  return (
    <div className='get-in-touch-content'>
        <div className='get-in-touch-content__first-row'>
            <div className='get-in-touch__title get-in-touch__title--green'>Get in</div>
            <img src={starImg} alt="Star" />

        </div>
        <div className='get-in-touch__title get-in-touch__title--yellow'>touch</div>
    </div>
  )
}
 