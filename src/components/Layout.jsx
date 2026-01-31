import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import ContentLayout from './ContentLayout';
import Footer from './Footer';
import FloatingSocial from './FloatingSocial';

const Layout = ({ children }) => {
    const location = useLocation();
    const isLandingPage = location.pathname === '/';

    return (
        <div className="site-layout">
            <Navbar />
            {isLandingPage ? (
                <main className="main-content">{children}</main>
            ) : (
                <ContentLayout>
                    {children}
                </ContentLayout>
            )}
            <Footer />
            <FloatingSocial />
        </div>
    );
};

export default Layout;
