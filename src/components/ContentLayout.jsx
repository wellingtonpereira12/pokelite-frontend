import React from 'react';
import Sidebar from './Sidebar';

const ContentLayout = ({ children }) => {
    return (
        <div id="wrapper" className="container">
            <div id="conteudo">
                <div id="esquerda">
                    {children}
                </div>
                <Sidebar />
            </div>
        </div>
    );
};

export default ContentLayout;
