import React from 'react';

import hallImg from "../../assets/our-facilities/hall.jpg";
import checkBottom from "../../assets/our-facilities/check-bottom.svg";

export default function FirstFacitilies() {
  return (
    <div className='first-facitilies-mobile'>
        <div className='first-facitilies-mobile__img'> 
          <img src={hallImg} alt="" />
        </div>

        <div className='first-facitilies-mobile__grid'>

            <div className='our-facitilies__title first-facitilies-mobile__number'>01</div>
            <h2 className='our-facitilies__title first-facitilies-mobile__title'>Ice restaurant</h2>

            <button className='first-facitilies-mobile__btn'>
              <img src={checkBottom} alt="Check bottom" />
            </button>
            <p className='first-facitilies-mobile__text'>The hotel’s exclusive infrastructure is complemented by the unique atmosphere of the Safe Restaurant. Author’s menu, extensive wine card, and live music will set you for the correct mood.</p>

        </div>

    </div>
  )
}
