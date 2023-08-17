import React from 'react';
import PrimaryNavbar from "../components/HomeComponents/PrimaryNavbar";
import SecondaryNavbar from '../components/HomeComponents/SecondaryNavbar';
import AboutContent from '../components/HomeComponents/AboutContent';
import Footer from '../components/Footer';
import ChatBot from '../components/ChatBot'

const HomePage = () => {
    return(
        <>
        <PrimaryNavbar/>
        <SecondaryNavbar/>
        <AboutContent />
        <ChatBot/>
        <Footer/>
        </>
        
    );
    
    
}
export default HomePage;