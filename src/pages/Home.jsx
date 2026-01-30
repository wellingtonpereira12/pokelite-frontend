import React, { useState, useEffect } from 'react';

export default function Home() {
    const [news, setNews] = useState([
        {
            id: 1,
            title: 'Bem-vindo ao PokeElite!',
            content: `
                <p>Bem-vindo ao <b>PokeElite</b>, o servidor Pokémon mais emocionante da atualidade!</p>
                <p>Aqui você encontrará:</p>
                <ul>
                    <li>Sistema de captura exclusivo</li>
                    <li>Mais de 800 Pokémons disponíveis</li>
                    <li>PvP balanceado e emocionante</li>
                    <li>Eventi semanais com prêmios incríveis</li>
                    <li>Comunidade ativa e suporte dedicado</li>
                </ul>
                <p>Crie sua conta agora e comece sua jornada!</p>
            `,
            date: '30/01/2026',
            author: 'Admin'
        },
        {
            id: 2,
            title: 'Atualização v1.5 - Novas Features!',
            content: `
                <p>Estamos muito felizes em anunciar a <b>versão 1.5</b> do PokeElite!</p>
                <p><b>Novidades:</b></p>
                <ul>
                    <li>Nova região: Johto completa</li>
                    <li>Sistema de breeding melhorado</li>
                    <li>100 novos Pokémons shiny</li>
                    <li>Arena de batalha ranqueada</li>
                    <li>Sistema de clãs</li>
                </ul>
                <p>Faça o download da versão atualizada e aproveite!</p>
            `,
            date: '28/01/2026',
            author: 'GameMaster'
        },
        {
            id: 3,
            title: 'Evento especial de fim de semana!',
            content: `
                <p>🎉 <b>EVENTO ESPECIAL</b> neste fim de semana! 🎉</p>
                <p>De sexta a domingo teremos:</p>
                <ul>
                    <li>Experiência dobrada (2x EXP)</li>
                    <li>Taxa de catch aumentada em 50%</li>
                    <li>Chance de shiny aumentada</li>
                    <li>Boss raro spawando a cada hora</li>
                </ul>
                <p>Não perca essa oportunidade!</p>
            `,
            date: '27/01/2026',
            author: 'Admin'
        }
    ]);

    return (
        <div>
            {news.map((article) => (
                <div key={article.id} className="news">
                    <div className="newsTitle">
                        {article.title}
                    </div>
                    <div className="newsBody">
                        <div dangerouslySetInnerHTML={{ __html: article.content }} />
                    </div>
                    <div className="newsFooter">
                        Postado em {article.date} por {article.author}
                    </div>
                </div>
            ))}

            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <a href="#" style={{ color: '#232675', fontSize: '16px', fontWeight: 'bold' }}>
                    Ver arquivo de notícias »
                </a>
            </div>
        </div>
    );
}
