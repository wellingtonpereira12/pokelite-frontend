import React from 'react';
import Navbar from './Navbar';
import ContentLayout from './ContentLayout';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <>
            <div id="topo"></div>
            <Navbar />
            <ContentLayout>
                {children}
            </ContentLayout>
            <Footer />
        </>
    );
};

export default Layout;
