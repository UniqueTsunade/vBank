import React from 'react';


import kitchenImg from "../../assets/our-facilities/kitchen.jpg";
import barImg from "../../assets/our-facilities/bar.jpg";
import starImg from "../../assets/our-facilities/facility-star.svg";
import facilitiesLabel from "../../assets/our-facilities/facility-label.svg";

import conferenceHall from "../../assets/our-facilities/conference-hall.jpg";
import wineBar from "../../assets/our-facilities/wine-bar.jpg"
import checkLeft from "../../assets/our-facilities/check-left.svg";

import FirstFacitilies from './FirstFacitilies';
import FirstFacitiliesMobile from './FirstFacitiliesMobile';


const Data = [
  {
      id: 1,
      imgSrc: conferenceHall,
      alt: "Conference hall",
      number: "02",
      title: "conference hall",
  },
  {
      id: 2,
      imgSrc: wineBar,
      alt: "Wine bar",
      number: "03",
      title: "Wine bar “reserve”",   
  }
]

export default function OurFacilities() {
  return (
    <section className='our-facilities'>

        <div className='container'>

            <div className='our-facilities__grid'>

              <div className='facilities-first-column'>
                <h4 className='facilities-first-column__text'>Art & Congress<br />hall</h4>
              </div>

              <div className='facilities-title title'>
                <div>Our</div>
                <div>faci</div>
                <div className='facilities-title__last-string'>
                  <img className='facilities-title__img' src={starImg} alt="Star" />
                  <div>lities</div>
                </div>
              </div>

              <div className='facilities-third-column'>
                <img className='facilities-third-column__label' src={facilitiesLabel} alt="Label" />
                <img className='facilities-third-column__img' src={barImg} alt="Bar" />
              </div>


              <div className='our-facilities__img-kitchen'>
                <img src={kitchenImg} alt="Kitchen" />
              </div>

              <div className='facilities-second-column'>
                <p className='facilities-second-column__text'>Bank Hotel offers you a wide range of additional services and facilities. Visit our restaurant to try exclusive meals, book a conference hall to organize a business meeting, or relax in the art-bar.</p>
              </div>

            </div>

            <FirstFacitilies />
            <FirstFacitiliesMobile />

            <div className='second-facitilies'>
              {Data.map(({id, imgSrc, alt, number, title}) => {
                return (                
                  <div 
                  key={id}
                  className='second-facitilies__point'
                  >
                    <img src={imgSrc} alt={alt} />

                    <div className='our-facitilies__title second-facitilies__number'>{number}</div>

                    <h2 className='our-facitilies__title'>{title}</h2>

                    <a className='second-facitilies__btn' href="#!"><img src={checkLeft} alt="Check left"/></a>

                    <div className='second-facitilies__delimiter'></div>
                  </div>
                )
                })}
              </div>

              <div className='second-facitilies-mobile'>
              {Data.map(({id, imgSrc, alt, number, title}, index) => {
                return (                
                  <div 
                  key={id}
                  className='second-facitilies-mobile__point'
                  >


                    <div className='second-facitilies-mobile__block'>
                      <img src={imgSrc} alt={alt} />
                      <div className='our-facitilies__title second-facitilies-mobile__number'>{number}</div>
                      <h2 className='our-facitilies__title second-facitilies-mobile__title'>{title}</h2>
                    </div>

                    {index < Data.length - 1 && (
                    <div className='second-facitilies-mobile__delimiter'></div>
                    )}
                    
                  </div>
                )
                })}
              </div>
                                  

        </div>
        
    </section>
  )
}
