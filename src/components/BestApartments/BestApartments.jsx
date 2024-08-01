import React from 'react';
import {Curve} from '../Сurves';

export default function () {
  return (
    <div className='best-apartments yellow'>

        <div className='container'>
            <h2 className='best-apartments__title title'>Best <br /> apartments</h2>
            <h4 className='best-apartments__text'>All room decoration was made with ecological certified and safe materials.</h4>
        </div>

        <Curve className='best-apartments__line' />

    </div>
  )
}
