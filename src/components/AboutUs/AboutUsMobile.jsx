import React from 'react'

import aboutUsLeft from "../../assets/about-us/about-us-left.jpg";
import aboutUsLeft2x from "../../assets/about-us/about-us-left@2x.jpg";
import aboutUsLeft3x from "../../assets/about-us/about-us-left@3x.jpg";
import aboutUsLabel from "../../assets/icons/about-us-label.svg";


export default function AboutUs() {
  
  return (
    <section className='about-us-mobile green'>

        <div className='decorative-lines-mobile'> 
            <div id='top-line-mobile'></div>
            <div id='vertical-line-mobile'></div>
            <div id='line-arch-mobile'></div>
        </div>

        <div className='container'>
            <div className='about-us-mobile__content'>

            <h2 className='title about-us-mobile__title'> <span className='yellow'>About</span> <br /> <span className='white'>US</span></h2>

                <div className='about-us-mobile__left-img'>
                    <img src={aboutUsLeft}  srcSet={`${aboutUsLeft2x}, ${aboutUsLeft3x}`} alt="Room" />
                </div>

                <div className='about-us-mobile__text'>
                    <div className='about-us-mobile__text-wrapper'>
                        <h3 className='about-us-mobile__subtitle'>High quality</h3>
                        <p className='about-us-mobile__description'>The five-star Bank Hotel was reopened to visitors in 2016. The building was renovated and modernized to meet the expectations of the most demanding guests. We offer luxurious rooms, numerous facilities, and exceptional service.</p>
                    </div>

                    <div>       
                        <img className='about-us-mobile__text-icon' src={aboutUsLabel} alt="" />     
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}
