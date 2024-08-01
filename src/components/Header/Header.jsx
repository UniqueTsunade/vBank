import React, {useState, useRef}  from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


import btn from "../../assets/icons/arrow-to-down.svg";
import checkIn from "../../assets/icons/check-in.svg";
import checkOut from "../../assets/icons/check-out.svg";


import Foundation from './Foundation';
import BookRoom from '../BookRoom';

export default function Header() {
  /* Initiate the state so that initially no selected date is displayed in the "DatePicker" */
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);

  const datePickerRef = useRef(null); // Create a "ref" for the "DatePicker" element
  const checkOutRef = useRef(null);

  const handleImgClick = () => {
    datePickerRef.current.setOpen(true); // Set focus to "DatePicker" when clicking on image
  };

  const secondHandleImgClick = () => {
    checkOutRef.current.setOpen(true); 
  }

  return (
    <section className='header green'>

      <div className='container'>

        <div className="header-content">

            <div className='header-content__left-section'>
             <h1 className='header-content__title'><span className='white'>Bank</span> <span className='yellow'>Hotel</span></h1>
             <h3 className='header-content__points'>rooms&nbsp;// restaurant&nbsp;// congress&nbsp;hall&nbsp;// wine&nbsp;bar</h3>
            </div>

            <div className='header-content__tablet-delimiter'></div>

            <div className='header-content__right-section'>

              <Foundation className='foundation' />

              <h4>The luxurious hotel in the most beautiful European city with an exclusive restaurant, conference-hall, and art-bar.</h4>
            </div>


            <a href='#' className='header-content__btn--desktop'><img src={btn} alt="" /></a>

            <div className='header-content__right-section--desktop'>
            <h4>The luxurious hotel in the most beautiful European city with an exclusive restaurant, conference-hall, and art-bar.</h4>
            </div>

            <div className='header-content__right-section--tablet'>
            <h4>The luxurious hotel in the most beautiful European city with an exclusive restaurant, conference-hall, and art-bar.</h4>
            </div>

        </div>


        <div className='header-form'>

        <form>
              <div className='customInput customInput--check-in'>

                <DatePicker id='check-in' className='customDatePicker'
                  selected={selectedStartDate} 
                  onChange={date => setSelectedStartDate(date)} // new value for state "selectedStartDate"
                  dateFormat="dd.MM.yyyy" // change the date format
                  ref={datePickerRef} // create a "datePickerRef" reference associated with the "DatePicker" component
                  placeholderText='Check in'
                />

                <img 
                id='customInput__img' 
                src={checkIn} 
                alt='Check in'
                onClick={handleImgClick} 
                />

              </div>


              <div className='customInput customInput--check-out'>

                <DatePicker id='check-out' className='customDatePicker'
                  selected={selectedEndDate} 
                  onChange={date => setSelectedEndDate(date)} // new value for state "selectedEndDate"
                  dateFormat="dd.MM.yyyy"
                  ref={checkOutRef}
                  placeholderText="Check out"
                />

                <img 
                id='customInput__img' 
                src={checkOut} 
                alt='Check out'
                onClick={secondHandleImgClick} 
                />

              </div>

            <button className='header-form__btn' type='submit'>book room</button>
          </form>

          <BookRoom className="header-form__sticker" />
        </div>

        <div className='header-links'>

          <div className='header-links__left'>
            <a className='header-links__tel' href="tel:+380322975020">+38 032 297 50 20</a>
            <a className='header-links__address' href="#">8 Lystopadovoho Chynu,Lviv</a>
          </div>

          <div className='header-links__right'>
            <a href="#!">Art & Congress <br />hall</a>
          </div>

        </div>

      </div>

    </section>
  )
}