import React from 'react';
import {СurveGallery} from '../Сurves';
import GetInTouchContent from './GetInTouchContent';
import sofaImg from "../../assets/get-in-touch/sofa.jpg";
import sofaImg2x from "../../assets/get-in-touch/sofa@2x.jpg";
import sofaImg3x from "../../assets/get-in-touch/sofa@3x.jpg";
import FindRoom from './FindRoom';
import BookRoom from '../BookRoom';

export default function GetInTouch() {
  return (
    <div className='get-in-touch'>
        <div className='container'>
            <div className='get-in-touch__tel'>
                <a href="tel:+380322975020">+38 032 297 50 20</a>
            </div>
            <h4 className='get-in-touch__address'>8 Lystopadovoho Chynu,Lviv</h4>
            <GetInTouchContent />
            <h4 className='get-in-touch__form-title'>Find a room</h4>
            <FindRoom /> 
            <BookRoom className="get-in-touch__slide-sticker" />
        </div>
         <img className='get-in-touch__img' src={sofaImg} srcSet={`${sofaImg2x}, ${sofaImg3x}`} alt="Sofa" />
        <СurveGallery className="get-in-touch__curve"/> 

    </div>
  )
}
