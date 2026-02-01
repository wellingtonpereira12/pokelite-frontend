import React from 'react';


const ContentLayout = ({ children }) => {
    return (
        <div id="wrapper" className="container">
            <div id="conteudo">
                <div id="esquerda" style={{ width: '100%' }}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ContentLayout;
