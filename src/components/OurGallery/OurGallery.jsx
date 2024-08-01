import React from 'react';
import GalleryGrid from './GalleryGrid';
import GalleryGridMobile from './GalleryGridMobile';
import GalleryFooter from './GalleryFooter';



export default function OurGallery() {
  return (
    <div className='our-gallery green'>
      <div className='container'>
        <GalleryGrid />
        <GalleryGridMobile />
      </div>
      <GalleryFooter />
    </div>
  )
}
