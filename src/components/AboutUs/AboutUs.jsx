import React from 'react'

import aboutUsLeft from "../../assets/about-us/about-us-left.jpg";
import aboutUsLeft2x from "../../assets/about-us/about-us-left@2x.jpg";
import aboutUsLeft3x from "../../assets/about-us/about-us-left@3x.jpg";
import aboutUsRight from "../../assets/about-us/about-us-right.jpg";
import aboutUsRight2x from "../../assets/about-us/about-us-right@2x.jpg";
import aboutUsRight3x from "../../assets/about-us/about-us-right@3x.jpg";
import aboutUsLabel from "../../assets/icons/about-us-label.svg";

import CustomBtn from './CustomBtn';
import AboutUsMobile from './AboutUsMobile';



export default function AboutUs() {
  
  return (
    <>
    <section className='about-us green'>

        <div className='decorative-lines'> 
            <div id='top-line'></div>
            <div id='vertical-line'></div>
            <div id='line-arch'></div>
        </div>

        <div className='container'>
            <div className='about-us__content'>

                <div className='about-us__left-img'>
                    <img src={aboutUsLeft}  srcSet={`${aboutUsLeft2x}, ${aboutUsLeft3x}`} alt="Room" />
                </div>

                <div className='about-us__text'>
                    <h2 className='title about-us__title'> <span className='yellow'>About</span> <br /> <span className='white'>US</span></h2>

                    <div className='about-us__text-wrapper'>
                        <h3 className='about-us__subtitle'>High quality</h3>
                        <p className='about-us__description'>The five-star Bank Hotel was reopened to visitors in 2016. The building was renovated and modernized to meet the expectations of the most demanding guests. We offer luxurious rooms, numerous facilities, and exceptional service.</p>
                    </div>

                </div>

                
                <div className='about-us__right-img'>
                    <img className='about-us__text-icon' src={aboutUsLabel} alt="" />

                    <img className='about-us__second-img' src={aboutUsRight}  srcSet={`${aboutUsRight2x}, ${aboutUsRight3x}`} alt="Room" />
                    
                    <CustomBtn />
                    
                </div>

            </div>
        </div>
    </section>

    <AboutUsMobile />
    </>
  )
}
