import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

const Navbar = () => {
    const location = useLocation();
    const { isAuthenticated, logout } = useAuthStore();
    const [menuOpen, setMenuOpen] = useState(false);

    const isActive = (path) => location.pathname === path ? 'active' : '';

    const handleLogout = () => {
        logout();
    };

    return (
        <div id="cssmenu">
            <ul>
                <a href="/" style={{
                    paddingLeft: '20px',
                    position: 'static',
                    float: 'left',
                    margin: '-8px 0',
                    zIndex: 2
                }}>
                    <img
                        src="/img/banner.png"
                        className="img-responsive"
                        style={{ maxWidth: '150px' }}
                        alt="PokeElite"
                    />
                </a>

                <li className={isActive('/')}>
                    <Link to="/">
                        <i className="fa fa-fw fa-home"></i> Início
                    </Link>
                </li>

                <li className="has-sub">
                    <a href="#">
                        <i className="fa fa-fw fa-group"></i> Comunidade
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

                <li className="has-sub">
                    <a href="#">
                        <i className="fa fa-fw fa-download"></i> DOWNLOAD
                    </a>
                    <ul>
                        <li>
                            <Link to="/download">
                                <i className="fa fa-fw fa-hashtag"></i> Baixar Cliente
                            </Link>
                        </li>
                    </ul>
                </li>

                <li className="has-sub">
                    <a href="#">
                        <i className="fa fa-fw fa-life-bouy"></i> SUPORTE
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
                    <li style={{
                        float: 'right',
                        marginRight: '40px',
                        position: 'relative'
                    }} className="has-sub">
                        <a href="#">
                            <i className="fa fa-fw fa-navicon"></i>
                            <span style={{ fontWeight: 'bold' }}>Conta</span>
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
                    <li style={{
                        float: 'right',
                        marginRight: '40px',
                        position: 'relative'
                    }} className="has-sub">
                        <a href="#">
                            <i className="fa fa-fw fa-navicon"></i> Conta
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
