import React from 'react';

import bathroomImg from "./../../assets/our-gallery/bathroom.jpg";
import bathroomImg2x from "./../../assets/our-gallery/bathroom@2x.jpg";
import bathroomImg3x from "./../../assets/our-gallery/bathroom@3x.jpg";

export default function GalleryFooter() {
  return (
    <div className='gallery-footer'>

        <div className='gallery-footer__wrapper'>
            <p className='gallery-footer__first-text'>Bank hotel <span>Bank__hotel©</span> Bank hotel Bank hotel Bank__hotel© Bank hotel Bank</p>
            <p className='gallery-footer__second-text'>hotel Bank hotel  Bank hotel Bank  hotel Bank hotel hotel Bank hotel  Bank hotel Bank  hotel Bank hotel</p>
        </div>

        <img className='gallery-footer__bathroom-img' src={bathroomImg} srcSet={`${bathroomImg2x}, ${bathroomImg3x}`} alt="Restaurant" />

  </div>
  )
}
