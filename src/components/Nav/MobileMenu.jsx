import React, {useState} from "react";
import menu from "../../assets/icons/mob-nav/menu.svg";
import closeBtn from "../../assets/icons/mob-nav/menu-close.svg";
import mobileMenuStar from "../../assets/icons/mob-nav/mobile-menu-star.svg";

export default function MobileMenu() {
    const [isOpen, setOpen] = useState(false);

    const toggleNav = () => {
        setOpen(!isOpen);
    };
    
    return (
        <div className="mobile-menu">
            <div className={`mobile-menu__content ${isOpen ? "active" : ""}`}>

            <button className="mobile-menu__close-btn" onClick={toggleNav}>
                <img src={closeBtn} alt="Close mobile menu" />
            </button>

            <ul className="mobile-nav-list">
                <li className="mobile-nav-list__item mobile-nav-list__item-centred">
                    <a href="#!" className="mobile-nav-list__link">Home</a>
                    <img src={mobileMenuStar} alt="Star" />
                </li>

                <li className="mobile-nav-list__item">
                    <a href="#!" className="mobile-nav-list__link">About</a>
                </li>

                <li className="mobile-nav-list__item">
                    <a href="#!" className="mobile-nav-list__link">Rooms</a>
                </li>

                <li className="mobile-nav-list__item">
                    <a href="#!" className="mobile-nav-list__link">Restaurant</a>
                </li>

                <li className="mobile-nav-list__item">
                    <a href="#!" className="mobile-nav-list__link">Conference hall</a>
                </li>
                <li className="mobile-nav-list__item">
                    <a href="#!" className="mobile-nav-list__link">Contacts</a>
                </li>
            </ul>

            <div className="mobile-menu__contacts">
                <a href="tel:+380322975020" className="mobile-menu__contacts-call">+38 032 297 50 20</a>
                <a href="#!" className="mobile-menu__contacts-address">8 Lystopadovoho Chynu,Lviv</a>
            </div>
            

            <div className="mobile-menu__socials">
                <a href="#!">Facebook</a>
                <a href="#!">Instagram</a>
                <a href="!#">twitter</a>
            </div>

            </div>
            
            <button className={`mobile-menu__open-btn ${isOpen ? "none" : ""}`} onClick={toggleNav}> 
                <img src={menu} alt="Open mobile menu" />
            </button>
        </div>
    )
}