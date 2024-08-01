import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/effect-fade';

import star from "../../assets/icons/star.svg";

import CustomPagination from './CustomPagination'
import slideData from "./SlideData";
import CustomSliderBtn from "./CustomSliderBtn";

import BookRoom from '../BookRoom';



export default function RoomsSliderMobile() {

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
            {slideData.map(({ id, slideTitle, slideDescription, imgBigSrc, alt }) => (
              <SwiperSlide key={id}>
                <div className='slide-mobile'>

                    <div className='slide-mobile__first-section'>
                      <img className='slide-mobile__big-img' src={imgBigSrc} alt={alt} loading="lazy" /> 
                      <BookRoom className="slide-mobile__sticker" />
                    </div>

                      <CustomPagination
                      totalSlides={totalSlides}
                      activeIndex={activeIndex}
                      setActiveIndex={setActiveIndex}
                      />
        
                  <div className='slide-mobile__second-section'>

                    <h3 className='slide-mobile__title'>{slideTitle}</h3>

                    <div className='slide-mobile__second-section_text'>
                      <CustomSliderBtn swiperInstance={swiperInstance}/>
                      <p className='slide-mobile__description'>{slideDescription}</p>
                    </div>

                  </div>
        

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        );}