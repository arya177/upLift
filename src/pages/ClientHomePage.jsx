import React from 'react';
import PrimaryNavbar from '../components/clientComponents/PrimaryNavbar';
import ClientContent from '../components/clientComponents/ClientContent';
import Footer from '../components/Footer'

const ClientHomePage = () => {
    const pageStyles = {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', // Ensure the page takes up at least the full viewport height
    };

    
    const footerStyles = {
        marginTop: 'auto', // Push the footer to the bottom of the viewport
    };

    return(
        <>
            <div style={pageStyles}>
            <PrimaryNavbar />
            
            <Footer style={footerStyles} />
        </div>

        </>
    )
}
export default ClientHomePage;
