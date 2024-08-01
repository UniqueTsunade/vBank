import React, {useState} from 'react';
import MobileMenu from './MobileMenu';


export default function Navbar() {
        
  return (
    <nav className='nav green'>
        <div className='container'>
            <div>
                <a href="#" className='nav__logo'>BankHotel</a>
            </div>

            <div className='nav-list'>
                <ul className='nav-list__links'>
                    <li>
                        <a href="#">Home</a>

                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Rooms</a>
                    </li>
                    <li>
                        <a href="#">Restaurant</a>
                    </li>
                    <li>
                        <a href="#">Conference hall</a>
                    </li>
                    <li>
                        <a href="#">Contacts</a>
                    </li>
                </ul>            
            </div>

            <div>
                <a href="tel:+380322975020" className='nav__contact'>+38 032 297 50 20</a>
            </div>

            <MobileMenu />

        </div>
    </nav>
  )
}
