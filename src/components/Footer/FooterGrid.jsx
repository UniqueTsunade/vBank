import React from 'react';
import footerIcon from "../../assets/icons/footer-icon.svg";

export default function FooterGrid() {
  return (
    <div className='footer-grid'>
        <div className='footer-grid__section footer-grid__section--first'>
            <h4 className='footer-grid__title'><span>/</span>About us</h4>
            <p className='footer-grid__text'>The five-star hotel in a beautiful European city with a modern restaurant, conference-hall, and art-bar.</p>
            <p className='footer-grid__copyright'>©2024 All rights reserved. BankHotel</p>
        </div>
        <div className='footer-grid__section footer-grid__section--second'>
            <h4 className='footer-grid__title'><span>/</span>News</h4>
            <p className='footer-grid__text'>Sign up to our newsletter not to miss exclusive offers and information about the upcoming events.</p>
            <form className='footer-grid__form'>
                <input className='footer-grid__input' placeholder='EMAIL' type="text" />
                <a href="#!" className='footer-grid__send-btn'>
                <img src={footerIcon} alt="Send email" />
                </a>
            </form>
        </div>
        <div className='footer-grid__section footer-grid__section--third'>
            <h4 className='footer-grid__title'><span>/</span>Social</h4>
            <div>
                <a href="#!">Facebook</a>
                <a href="#!">Instagram</a>
                <a href="!#">twitter</a>
            </div>
        </div>
    </div>
  )
}
