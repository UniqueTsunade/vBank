import React from 'react';
import FooterGrid from './FooterGrid';

export default function Footer() {
  return (
    <section className='footer'>
        <div className='container'>
            <div className='footer__delimiter'></div>
            <FooterGrid />
        </div>
        <p className='footer-grid__copyright_mobile'>©2024 All rights reserved. BankHotel</p>
    </section>
  )
}
