import React from 'react';

const FloatingSocial = () => {
    return (
        <div className="floating-social">
            <a
                href="https://www.facebook.com/pokemonxmaster/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn facebook"
                aria-label="Facebook"
            >
                <i className="fa fa-facebook"></i>
            </a>
            <a
                href="https://discord.gg/pokeelite"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn discord"
                aria-label="Discord"
            >
                <i className="fa fa-brands fa-discord"></i>
            </a>
            <a
                href="https://www.youtube.com/channel/UCfakeID"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn youtube"
                aria-label="YouTube"
            >
                <i className="fa fa-youtube"></i>
            </a>
        </div>
    );
};

export default FloatingSocial;
