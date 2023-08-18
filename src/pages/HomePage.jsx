import React from 'react';
import PrimaryNavbar from "../components/HomeComponents/PrimaryNavbar";
import SecondaryNavbar from '../components/HomeComponents/SecondaryNavbar';
import AboutContent from '../components/HomeComponents/AboutContent';
import Footer from '../components/Footer';

const HomePage = () => {
    return(
        <>
        <PrimaryNavbar/>
        <SecondaryNavbar/>
        <AboutContent />
        <Footer/>
        </>
        
    );
    
    
}
export default HomePage;