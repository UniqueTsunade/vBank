import React from 'react';

import couchImg from "./../../assets/our-gallery/couch.jpg";
import couchImg2x from "./../../assets/our-gallery/couch@2x.jpg";
import couchImg3x from "./../../assets/our-gallery/couch@3x.jpg";

import tvImg from "./../../assets/our-gallery/tv.jpg";
import tvImg2x from "./../../assets/our-gallery/tv@2x.jpg";
import tvImg3x from "./../../assets/our-gallery/tv@3x.jpg";

import fireplaceImg from "./../../assets/our-gallery/fireplace.jpg";
import fireplaceImg2x from "./../../assets/our-gallery/fireplace@2x.jpg";
import fireplaceImg3x from "./../../assets/our-gallery/fireplace@3x.jpg";

import restaurantImg from "./../../assets/our-gallery/restaurant.jpg";
import restaurantImg2x from "./../../assets/our-gallery/restaurant@2x.jpg";
import restaurantImg3x from "./../../assets/our-gallery/restaurant@3x.jpg";


import bathroomImg from "./../../assets/our-gallery/bathroom.jpg";
import bathroomImg2x from "./../../assets/our-gallery/bathroom@2x.jpg";
import bathroomImg3x from "./../../assets/our-gallery/bathroom@3x.jpg";


import galleryText from "./../../assets/our-gallery/gallery-text.svg";
import galleryIcon from "./../../assets/our-gallery/gallery-icon.svg";
import galleryPolygon from "./../../assets/our-gallery/gallery-polygon.svg"

export default function GalleryGrid() {
  return (
    <div className='gallery-grid-mobile'>
      {/* <div className='gallery-grid__first-row'>
        <h4 className='gallery-grid__subtitle white'>Art & Congress <br /> hall</h4>
        <img className='gallery-grid__couch-img' src={couchImg} srcSet={`${couchImg2x}, ${couchImg3x}`} alt="Couch" />
        <img className='gallery-grid__tv-img' src={tvImg} srcSet={`${tvImg2x}, ${tvImg3x}`} alt="TV" />
      </div> */}

      <div className='gallery-grid-mobile__first-row'>
        <div className='gallery-grid-mobile__label'>
          <img src={galleryText} alt="Premium rooms" />
          <img className='gallery-grid-mobile__flower-icon' src={galleryIcon} alt="Flower" />
        </div>
        <h2 className='gallery-grid-mobile__title title yellow'>our<br/> Gallery</h2>
        <p className='gallery-grid__description'>Explore our spacious rooms with the gorgeous view to the historical part of the city. Each room has an exclusive interior design decorated with modern art pieces that will make your stay unforgettable.</p>
      </div>

      <div className='gallery-grid-mobile__second-row'>

        <img className='gallery-grid-mobile__couch-img' src={couchImg} srcSet={`${couchImg2x}, ${couchImg3x}`} alt="Couch" />

        <img className='gallery-grid-mobile__restaurant' src={restaurantImg} srcSet={`${restaurantImg2x}, ${restaurantImg3x}`} alt="Restaurant" />

        <img className='gallery-grid-mobile__fireplace-img' src={fireplaceImg} srcSet={`${fireplaceImg2x}, ${fireplaceImg3x}`} alt="Fireplace" />

        
        <div className='gallery-grid-mobile__third-row'>
          <img className='gallery-footer-mobile__bathroom-img' src={bathroomImg} srcSet={`${bathroomImg2x}, ${bathroomImg3x}`} alt="Restaurant" />

          <img className='gallery-grid-mobile__tv-img' src={tvImg} srcSet={`${tvImg2x}, ${tvImg3x}`} alt="TV" />
        </div>

      </div>



      <div className='gallery-grid__recommendation'>
          <img src={galleryPolygon} alt="Polygon" />
        <p>It is our pleasure to meet your most unrealistic expectations.</p>
        </div>

      <div className='gallery-grid__third-row'>

      </div>
    </div>
  )
}
