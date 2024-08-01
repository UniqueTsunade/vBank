import React from 'react';
import "./scss/index.scss"
import Navbar from './components/Nav/Navbar';
import Header from './components/Header/Header';
import AboutUs from './components/AboutUs/AboutUs';
import Rooms from './components/Rooms/Rooms';
import OurFacilities from './components/OurFacilities/OurFacilities';
import BestApartments from './components/BestApartments/BestApartments';
import OurGallery from './components/OurGallery/OurGallery';
import GetInTouch from './components/GetInTouch/GetInTouch';
import Footer from './components/Footer/Footer';




const App = () => {
  return ( 
    <>
    <Navbar />
    <Header />
    <AboutUs />
    <Rooms />
    <OurFacilities />
    <BestApartments />
    <OurGallery />
    <GetInTouch />
    <Footer />
    </> 
  )
}


export default App;