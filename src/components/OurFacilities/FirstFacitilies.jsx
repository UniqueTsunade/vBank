import React from 'react';

import hallImg from "../../assets/our-facilities/hall.jpg";
import checkBottom from "../../assets/our-facilities/check-bottom.svg";

export default function FirstFacitilies() {
  return (
    <div className='first-facitilies'>
        <button className='first-facitilies__btn'>
            <img src={checkBottom} alt="Check bottom" />
        </button>
        <div className='first-facitilies__content'>
            <div className='our-facitilies__title first-facitilies__number'>01</div>
            <h2 className='our-facitilies__title'>Ice restaurant</h2>
            <p className='first-facitilies__text'>The hotel’s exclusive infrastructure is complemented by the unique atmosphere of the Safe Restaurant. Author’s menu, extensive wine card, and live music will set you for the correct mood.</p>
        </div>
        <div className='first-facitilies__img'> 
            <img src={hallImg} alt="" />
        </div>
    </div>
  )
}
