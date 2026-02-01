import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="landing-page">
            {/* Hero Section - Legion Style */}
            <section className="hero-section">
                <div className="hero-background"></div>

                {/* Central Glass Content */}
                <div className="hero-content">
                    <div className="hero-logo-container">
                        <img src="/img/banner.png" alt="PokeElite" className="hero-logo-large" />
                    </div>

                    <div className="hero-glass-card">
                        <h2>Comece sua aventura agora mesmo</h2>
                        <h3>Um mundo cheio de aventuras te espera</h3>

                        <div className="hero-buttons">
                            <Link to="/register" className="btn btn-primary btn-lg glow">CRIAR CONTA AGORA</Link>
                            <Link to="/download" className="btn btn-outline btn-lg">BAIXAR O JOGO</Link>
                        </div>
                    </div>
                </div>

                {/* Floating Stats Cards */}
                <div className="hero-stats-container">
                    <div className="hero-stat-card">
                        <span className="stat-label">System</span>
                        <span className="stat-value text-gradient">PokeTibia</span>
                    </div>
                    <div className="hero-stat-card">
                        <span className="stat-label">Drop Rate</span>
                        <span className="stat-value text-gradient">10x</span>
                    </div>
                    <div className="hero-stat-card">
                        <span className="stat-label">Online</span>
                        <span className="stat-value text-green">24/7</span>
                    </div>
                    <div className="hero-stat-card">
                        <span className="stat-label">Performance</span>
                        <span className="stat-value text-blue">High</span>
                    </div>
                </div>
            </section>

            {/* Info Bar Section - Horizontal */}
            <section className="info-bar-section">
                <div className="info-bar-container info-bar-two-cols">
                    {/* Server Status */}
                    <div className="info-bar-item">
                        <h3 className="info-bar-title">SERVER STATUS</h3>
                        <div className="info-bar-content">
                            <span className="info-text"><strong>Status:</strong> <span className="online-text">Online</span></span>
                            <span className="info-text"><strong>Uptime:</strong> 48h 23min</span>
                            <span className="info-text"><strong>Players:</strong> 42/1000</span>
                        </div>
                    </div>

                    {/* Character Search */}
                    <div className="info-bar-item">
                        <h3 className="info-bar-title">PROCURAR PERSONAGEM</h3>
                        <form className="info-bar-search" onSubmit={(e) => {
                            e.preventDefault();
                            const name = e.target.elements.charName.value;
                            if (name.trim()) {
                                window.location.href = `/character/view?name=${encodeURIComponent(name)}`;
                            }
                        }}>
                            <input
                                type="text"
                                name="charName"
                                placeholder="Nome do Treinador"
                                className="info-search-input"
                            />
                            <button type="submit" className="btn btn-primary btn-search">
                                PROCURAR
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Feature Section 1 */}
            <section className="feature-section">
                <div className="feature-container">
                    <div className="feature-content">
                        <h2>A comunidade faz o servidor</h2>
                        <p>
                            Junte-se a uma comunidade apaixonada e ativa! No PokeElite, você não está apenas jogando,
                            está fazendo parte de uma família unida que compartilha a mesma paixão.
                        </p>
                        <ul>
                            <li>Comunidade ativa no Discord</li>
                            <li>Eventos regulares organizados pela comunidade</li>
                            <li>Suporte 24/7 da equipe</li>
                            <li>Sistema de clãs e guildas</li>
                        </ul>
                        <Link to="/register" className="btn btn-primary">JUNTE-SE AGORA</Link>
                    </div>
                    <div className="feature-image">
                        <img src="/img/feature-1.png" alt="Comunidade" />
                    </div>
                </div>
            </section>

            {/* Feature Section 2 */}
            <section className="feature-section">
                <div className="feature-container">
                    <div className="feature-image">
                        <img src="/img/feature-2.png" alt="Conteúdo Exclusivo" />
                    </div>
                    <div className="feature-content">
                        <h2>Conteúdo exclusivo. Rebalanceado.</h2>
                        <p>
                            Experiência única com sistemas exclusivos e balanceamento cuidadoso.
                            Nosso time trabalha constantemente para oferecer a melhor experiência de jogo.
                        </p>
                        <ul>
                            <li>Mais de 800 Pokémons disponíveis</li>
                            <li>Sistema de captura exclusivo</li>
                            <li>Pokémons Shiny com taxas especiais</li>
                            <li>Balanceamento PvP constante</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Systems Grid */}
            <section className="systems-section">
                <h2>Sistemas Exclusivos</h2>
                <div className="systems-grid">
                    <div className="system-card">
                        <div className="system-icon purple">📊</div>
                        <h3>Sistema de Ranking</h3>
                        <p>Compita com outros jogadores e prove que você é o melhor treinador</p>
                    </div>
                    <div className="system-card">
                        <div className="system-icon green">🎯</div>
                        <h3>Missões Diárias</h3>
                        <p>Complete missões e ganhe recompensas exclusivas todos os dias</p>
                    </div>
                    <div className="system-card">
                        <div className="system-icon blue">⚡</div>
                        <h3>Eventos Semanais</h3>
                        <p>Participe de eventos especiais com prêmios incríveis</p>
                    </div>
                    <div className="system-card">
                        <div className="system-icon red">👹</div>
                        <h3>Boss Raids</h3>
                        <p>Enfrente chefes poderosos em grupo e ganhe itens raros</p>
                    </div>
                    <div className="system-card">
                        <div className="system-icon yellow">💰</div>
                        <h3>Economia Balanceada</h3>
                        <p>Sistema econômico justo com múltiplas formas de ganho</p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <h2>Pronto para Fazer História?</h2>
                <p>
                    Junte-se a milhares de jogadores e comece sua jornada épica hoje mesmo!
                </p>
                <div className="cta-buttons">
                    <Link to="/register" className="btn btn-orange">CRIAR CONTA GRÁTIS</Link>
                    <Link to="/download" className="btn btn-secondary">BAIXAR CLIENTE</Link>
                </div>
            </section>
        </div>
    );
}
