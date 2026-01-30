import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();
    const [serverStatus, setServerStatus] = useState({
        online: true,
        uptime: '48h 23min',
        players: 42,
        maxPlayers: 1000
    });
    const [searchName, setSearchName] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchName.trim()) {
            navigate(`/character/view?name=${encodeURIComponent(searchName)}`);
        }
    };

    return (
        <div id="direita">
            {/* Server Status */}
            <div className="title">
                Server Status
            </div>
            <div className="info">
                <span className="glyphicon glyphicon-globe"></span> <b>Status:</b>{' '}
                {serverStatus.online ? (
                    <>
                        <font color="green"><b>Online</b></font><br />
                        <span className="glyphicon glyphicon-signal"></span> <b>Uptime:</b> {serverStatus.uptime} <br />
                        <span className="glyphicon glyphicon-user"></span> <b>Players:</b> {serverStatus.players}/{serverStatus.maxPlayers} <br />
                        <span className="glyphicon glyphicon-time"></span> <b>Server Save:</b> 06:00:00 BRT <br />
                        <span className="glyphicon glyphicon-download-alt"></span> <b>Download:</b> Client V1.5 <br />
                    </>
                ) : (
                    <>
                        <font color="red"><b>Offline</b></font><br />
                        <span className="glyphicon glyphicon-user"></span> <b>Players:</b> 0/{serverStatus.maxPlayers} <br />
                        <span className="glyphicon glyphicon-time"></span> <b>Server Save:</b> 06:00:00 BRT <br />
                        <span className="glyphicon glyphicon-download-alt"></span> <b>Download:</b> Client V1.5 <br />
                    </>
                )}
            </div>
            <br />

            {/* Procurar Personagem */}
            <div className="title">
                Procurar Personagem
            </div>
            <div className="social">
                <form onSubmit={handleSearch}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="search"
                            value={searchName}
                            onChange={(e) => setSearchName(e.target.value)}
                            style={{ height: '40px' }}
                            className="form-control"
                            placeholder="Nome do Treinador"
                        />
                    </div>
                    <center>
                        <button
                            type="submit"
                            name="submit"
                            style={{ fontSize: '16px', fontWeight: 'bold' }}
                            className="btn btn-primary"
                        >
                            <span className="glyphicon glyphicon-search"></span> PROCURAR
                        </button>
                    </center>
                </form>
            </div>
            <br />

            {/* Redes Sociais */}
            <div className="title">
                Redes Sociais
            </div>
            <div className="social">
                <center>
                    <a href="https://discord.gg/JtVA8fRuNP" target="_blank" rel="noopener noreferrer">
                        <img src="/img/discord_64.png" width="64px" height="64px" alt="Discord" />
                    </a>
                    <a href="https://www.facebook.com/Poke-Elite-101215201812556" target="_blank" rel="noopener noreferrer">
                        <img src="/img/facebook_64.png" width="64px" height="64px" alt="Facebook" />
                    </a>
                    <a href="https://trello.com/b/NvyCDF3Y/poke-elite" target="_blank" rel="noopener noreferrer">
                        <img src="/img/instagram_64.png" width="64px" height="64px" alt="Instagram" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <img src="/img/youtube_64.png" width="64px" height="64px" alt="YouTube" />
                    </a>
                    <br /><br />
                    <iframe
                        src="https://discord.com/widget?id=1074126966153809970&theme=dark"
                        width="300"
                        height="400"
                        allowTransparency="true"
                        frameBorder="0"
                        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                        title="Discord Widget"
                    ></iframe>
                </center>
            </div>
            <br />

            {/* Promoção */}
            <div className="title">
                Promoção
            </div>
            <div className="promocao">
                <center>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <img src="/img/promocao.png" alt="Promoção" />
                    </a>
                </center>
            </div>
            <br />
        </div>
    );
};

export default Sidebar;
