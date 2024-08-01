import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/effect-fade';

import star from "../..//assets/icons/star.svg";

import CustomPagination from './CustomPagination'
import slideData from "./SlideData";
import CustomSliderBtn from "./CustomSliderBtn";

import BookRoom from '../BookRoom';
import RoomsSliderMobile from "./CustomSliderBtn";



export default function RoomsSlider() {

    const [swiperInstance, setSwiperInstance] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const totalSlides = slideData.length;
    
    return (
        <div>
          <Swiper
            onSwiper={setSwiperInstance}
            modules={[Navigation, Pagination, A11y]}
            slidesPerView={1}
            navigation={false}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            speed={1600}
            loop={true}
            onSlideChange={(swiper) => {
              if (swiper.activeIndex === totalSlides) {
                setActiveIndex(0);
              } else {
                setActiveIndex(swiper.realIndex);
              }
            }}>
            {slideData.map(({ id, imgMiniSrc, slideTitle, slideDescription, imgBigSrc, alt }) => (
              <SwiperSlide key={id}>
                <div className='slide'>
                  <div className='slide__first-section'>                     
                    <img className='slide__min-img' 
                         src={imgMiniSrc} 
                         alt={alt}
                         loading="lazy"
                    />
                   <CustomSliderBtn swiperInstance={swiperInstance}/>
                  </div>
        
                  <div className='slide__second-section'>
                    <div className='slide__foundation-icon'>
                      <img src={star} alt="star" />
                      <p>Since 1973</p>
                    </div>
                    <h3 className='slide__title'>{slideTitle}</h3>
                    <p className='slide__description'>{slideDescription}</p>
                    <CustomPagination
                      totalSlides={totalSlides}
                      activeIndex={activeIndex}
                      setActiveIndex={setActiveIndex}
                    />
                  </div>
        
                  <div className='slide__third-section'>
                    <img className='slide__big-img' src={imgBigSrc} alt={alt} loading="lazy" /> 
                    <BookRoom className="slide__sticker" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
        );}

