import React from 'react';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-content">
                <div className="footer-grid">
                    {/* Coluna 1 - Sobre Nós */}
                    <div className="footer-column">
                        <h3 className="footer-title">SOBRE NÓS</h3>
                        <p>
                            Somos a PokeElite, um servidor dedicado aos verdadeiros mestres Pokémon!
                            Nossas features completas você pode verificar acessando nosso site.
                        </p>
                        <small className="footer-disclaimer">
                            Pokémon © 1995-2026 Nintendo/Creatures/GAME FREAK.
                            PokeElite não é afiliado à Nintendo.
                        </small>
                    </div>

                    {/* Coluna 2 - Facebook */}
                    <div className="footer-column">
                        <h3 className="footer-title">FACEBOOK</h3>
                        <a href="https://www.facebook.com/pokemonxmaster/" target="_blank" rel="noopener noreferrer">
                            <img
                                src="/img/banner-rodape.png"
                                alt="Facebook PokeElite"
                                className="footer-banner"
                            />
                        </a>
                    </div>

                    {/* Coluna 3 - Contato */}
                    <div className="footer-column">
                        <h3 className="footer-title">CONTATO</h3>
                        <div className="footer-links">
                            <a href="#" className="footer-link">
                                <i className="fa fa-heart"></i> Blog PokeElite
                            </a>
                            <a href="#" className="footer-link">
                                <i className="fa fa-info-circle"></i> Central de Suporte
                            </a>
                            <a href="mailto:contato@pokeElite.com" className="footer-link">
                                <i className="fa fa-envelope"></i> contato@pokeElite.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="footer-bottom">
                <p>© 2026 PokeElite by EmpireSoft - Todos os direitos reservados</p>
            </div>
        </footer>
    );
};

export default Footer;
