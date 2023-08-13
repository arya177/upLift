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

    const contentWrapperStyles = {
        flex: 1,
        overflowY: 'auto', // Enable scrolling for content that exceeds the viewport height
        padding: '20px', // Adjust padding as needed
    };

    const footerStyles = {
        marginTop: 'auto', // Push the footer to the bottom of the viewport
    };

    return(
        <>
            <div style={pageStyles}>
            <PrimaryNavbar />
            <div style={contentWrapperStyles}>
                <ClientContent />
            </div>
            <Footer style={footerStyles} />
        </div>

        </>
    )
}
export default ClientHomePage;
