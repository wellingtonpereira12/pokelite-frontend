import React from 'react';

const Footer = () => {
    return (
        <>
            <br />
            <footer>
                <div className="footerHeader"></div>
                <div className="container" style={{ display: 'flex', flexWrap: 'wrap', padding: '20px 0' }}>
                    {/* Coluna 1 - Sobre Nós */}
                    <div style={{ flex: '1 1 33%', minWidth: '300px', padding: '0 15px' }}>
                        <h3>Sobre Nós</h3>
                        <p>
                            Somos a PokeElite, Nossas features completas você pode verificar
                            acessando nosso site. Para melhor experiência, acesse nosso jogo
                            e veja com seus próprios olhos!
                            <br /><br />
                            <small>
                                Pokémon Copyright © 1995 - 2026 Nintendo/Creatures Inc./GAME FREAK Inc.
                                Pokémon And All Respective Names are Trademarks of Nintendo 1996-2026
                                PokeElite is not affiliated with Nintendo, Creatures Inc. and GAME FREAK Inc.
                            </small>
                        </p>
                    </div>

                    {/* Coluna 2 - Facebook */}
                    <div style={{ flex: '1 1 33%', minWidth: '300px', padding: '0 15px' }}>
                        <h3>Facebook</h3>
                        <a href="https://www.facebook.com/pokemonxmaster/" target="_blank" rel="noopener noreferrer">
                            <img
                                src="/img/banner-rodape.png"
                                alt="Facebook PokeElite"
                                style={{ maxWidth: '100%', height: 'auto' }}
                            />
                        </a>
                    </div>

                    {/* Coluna 3 - Contato */}
                    <div style={{ flex: '1 1 33%', minWidth: '300px', padding: '0 15px' }}>
                        <h3>Contato</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '10px' }}>
                                <a href="#" style={{ textDecoration: 'none' }}>
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        style={{
                                            width: '100%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '10px',
                                            padding: '12px'
                                        }}
                                    >
                                        <span>❤️</span> Blog PokeElite
                                    </button>
                                </a>
                            </li>
                            <li>&nbsp;</li>
                            <li style={{ marginBottom: '10px' }}>
                                <a href="#" style={{ textDecoration: 'none' }}>
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        style={{
                                            width: '100%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '10px',
                                            padding: '12px'
                                        }}
                                    >
                                        <span>ℹ️</span> Central de Suporte
                                    </button>
                                </a>
                            </li>
                            <li>&nbsp;</li>
                            <li style={{ marginBottom: '10px' }}>
                                <a href="mailto:contato@pokeElite.com" style={{ textDecoration: 'none' }}>
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        style={{
                                            width: '100%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '10px',
                                            padding: '12px'
                                        }}
                                    >
                                        <span>📧</span> contato@pokeElite.com
                                    </button>
                                </a>
                            </li>
                        </ul>
                        <br /><br /><br />
                        <ul className="sm" style={{ listStyle: 'none', overflow: 'auto', padding: 0 }}>
                            <li style={{
                                display: 'inline',
                                float: 'right',
                                lineHeight: '40px',
                                fontSize: '12px'
                            }}>
                                2026 by EmpireSoft - All rights reserved!
                                <a href="#" style={{ color: '#e3e51f', marginLeft: '5px' }}>EmpireSoft</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
