import React, {useState, useRef}  from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


import checkIn from "../../assets/icons/check-in.svg";
import checkOut from "../../assets/icons/check-out.svg";

export default function FindRoom() {
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
    <div className="find-room-from">

        <form>
              <div className='find-room-from__input find-room-from__input--check-in'>

                <DatePicker id='check-in' className='find-room-from__date-picker'
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


              <div className='find-room-from__input find-room-from__input--check-out'>

                <DatePicker id='check-out' className='find-room-from__date-picker'
                  selected={selectedEndDate} 
                  onChange={date => setSelectedEndDate(date)} // new value for state "selectedEndDate"
                  dateFormat="dd.MM.yyyy"
                  ref={checkOutRef}
                  placeholderText='Check out'
                />

                <img 
                id='customInput__img' 
                src={checkOut} 
                alt='Check out'
                onClick={secondHandleImgClick} 
                />

              </div>

            <button className='find-room-from__btn' type='submit'>book room</button>
          </form>
    </div>
  )
}
