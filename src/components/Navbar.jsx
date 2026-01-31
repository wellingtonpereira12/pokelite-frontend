import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

const Navbar = () => {
    const location = useLocation();
    const { isAuthenticated, logout } = useAuthStore();
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSubMenu, setActiveSubMenu] = useState(null);

    const toggleSubMenu = (e, menuId) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            setActiveSubMenu(activeSubMenu === menuId ? null : menuId);
        }
    };

    const isActive = (path) => location.pathname === path ? 'active' : '';

    const handleLogout = () => {
        logout();
    };

    return (
        <div id="cssmenu">
            <div className="navbar-header">
                <a href="/" className="logo">
                    <img
                        src="/img/banner.png"
                        className="img-responsive"
                        alt="PokeElite"
                    />
                </a>
                <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    <i className={`fa fa-fw ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </div>
            </div>
            <ul className={menuOpen ? 'open' : ''}>

                <li className={isActive('/')}>
                    <Link to="/">
                        <i className="fa fa-fw fa-home"></i> Início
                    </Link>
                </li>

                <li className={`has-sub ${activeSubMenu === 'community' ? 'active-menu' : ''}`}>
                    <a href="#" onClick={(e) => toggleSubMenu(e, 'community')}>
                        <i className="fa fa-fw fa-group"></i> Comunidade
                        <span className="arrow"></span>
                    </a>
                    <ul>
                        <li>
                            <Link to="/character/view">
                                <i className="fa fa-fw fa-search"></i> Procurar
                            </Link>
                        </li>
                        <li>
                            <Link to="/highscores">
                                <i className="fa fa-fw fa-bar-chart"></i> Highscores
                            </Link>
                        </li>
                        <li>
                            <Link to="/guilds">
                                <i className="fa fa-fw fa-user-plus"></i> Guildas
                            </Link>
                        </li>
                        <li>
                            <Link to="/houses">
                                <i className="fa fa-fw fa-legal"></i> Casas
                            </Link>
                        </li>
                    </ul>
                </li>

                <li className={`has-sub ${activeSubMenu === 'download' ? 'active-menu' : ''}`}>
                    <a href="#" onClick={(e) => toggleSubMenu(e, 'download')}>
                        <i className="fa fa-fw fa-download"></i> DOWNLOAD
                        <span className="arrow"></span>
                    </a>
                    <ul>
                        <li>
                            <Link to="/download">
                                <i className="fa fa-fw fa-hashtag"></i> Baixar Cliente
                            </Link>
                        </li>
                    </ul>
                </li>

                <li className={`has-sub ${activeSubMenu === 'support' ? 'active-menu' : ''}`}>
                    <a href="#" onClick={(e) => toggleSubMenu(e, 'support')}>
                        <i className="fa fa-fw fa-life-bouy"></i> SUPORTE
                        <span className="arrow"></span>
                    </a>
                    <ul>
                        <li>
                            <Link to="/rules">
                                <i className="fa fa-fw fa-book"></i> Regras
                            </Link>
                        </li>
                        <li>
                            <Link to="/recovery">
                                <i className="fa fa-fw fa-envelope-o"></i> Recuperar Conta
                            </Link>
                        </li>
                        <li>
                            <Link to="/tickets">
                                <i className="fa fa-fw fa-commenting-o"></i> Abrir Ticket
                            </Link>
                        </li>
                    </ul>
                </li>

                <li>
                    <Link to="/shop">
                        <i className="fa fa-fw fa-shopping-cart"></i> LOJA
                    </Link>
                </li>

                {isAuthenticated ? (
                    <li className={`account-menu has-sub ${activeSubMenu === 'account' ? 'active-menu' : ''}`}>
                        <a href="#" onClick={(e) => toggleSubMenu(e, 'account')}>
                            <i className="fa fa-fw fa-navicon"></i>
                            <span style={{ fontWeight: 'bold' }}>Conta</span>
                            <span className="arrow"></span>
                        </a>
                        <ul>
                            <li>
                                <Link to="/account">
                                    <i className="fa fa-fw fa-user"></i> Minha Conta
                                </Link>
                            </li>
                            <li>
                                <Link to="/account/change-password">
                                    <i className="fa fa-fw fa-refresh"></i> Trocar Senha
                                </Link>
                            </li>
                            <li>
                                <a href="#" onClick={handleLogout}>
                                    <i className="fa fa-fw fa-mail-reply-all"></i> Sair
                                </a>
                            </li>
                        </ul>
                    </li>
                ) : (
                    <li className={`account-menu has-sub ${activeSubMenu === 'account-guest' ? 'active-menu' : ''}`}>
                        <a href="#" onClick={(e) => toggleSubMenu(e, 'account-guest')}>
                            <i className="fa fa-fw fa-navicon"></i> Conta
                            <span className="arrow"></span>
                        </a>
                        <ul>
                            <li>
                                <Link to="/register">
                                    <i className="fa fa-fw fa-paperclip"></i> Criar Conta
                                </Link>
                            </li>
                            <li>
                                <Link to="/login">
                                    <i className="fa fa-fw fa-user"></i> Acessar Conta
                                </Link>
                            </li>
                        </ul>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Navbar;
