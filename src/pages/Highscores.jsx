import React, { useState, useEffect } from 'react';

export default function Highscores() {
    const [highscores, setHighscores] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('level');

    useEffect(() => {
        fetchHighscores();
    }, [filter]);

    const fetchHighscores = async () => {
        try {
            setLoading(true);
            // Mock data - você pode substituir pela chamada real da API
            const mockData = [
                { rank: 1, name: 'Ash', vocation: 'Trainer', level: 352, points: 0 },
                { rank: 2, name: 'Misty', vocation: 'Water Master', level: 298, points: 0 },
                { rank: 3, name: 'Brock', vocation: 'Rock Master', level: 276, points: 0 },
                { rank: 4, name: 'Gary', vocation: 'Elite Trainer', level: 264, points: 0 },
                { rank: 5, name: 'May', vocation: 'Fire Master', level: 251, points: 0 },
                { rank: 6, name: 'Dawn', vocation: 'Ice Master', level: 243, points: 0 },
                { rank: 7, name: 'Serena', vocation: 'Fairy Master', level: 235, points: 0 },
                { rank: 8, name: 'Cilan', vocation: 'Grass Master', level: 227, points: 0 },
                { rank: 9, name: 'Iris', vocation: 'Dragon Master', level: 219, points: 0 },
                { rank: 10, name: 'Clemont', vocation: 'Electric Master', level: 210, points: 0 }
            ];

            setHighscores(mockData);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching highscores:', error);
            setLoading(false);
        }
    };

    return (
        <div>
            <div className="news">
                <div className="newsTitle">
                    Highscores - Ranking de Jogadores
                </div>
                <div className="newsBody">
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ marginRight: '10px', fontWeight: 'bold' }}>
                            Filtrar por:
                        </label>
                        <select
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            style={{ padding: '5px 10px', borderRadius: '4px', border: '1px solid #ccc' }}
                        >
                            <option value="level">Nível</option>
                            <option value="magic">Magic Level</option>
                            <option value="shielding">Shielding</option>
                            <option value="distance">Distance</option>
                            <option value="sword">Sword Fighting</option>
                            <option value="axe">Axe Fighting</option>
                            <option value="club">Club Fighting</option>
                        </select>
                    </div>

                    {loading ? (
                        <div style={{ textAlign: 'center', padding: '40px' }}>
                            <div className="spinner" style={{ margin: '0 auto' }}></div>
                            <p style={{ marginTop: '20px' }}>Carregando rankings...</p>
                        </div>
                    ) : (
                        <table>
                            <thead>
                                <tr>
                                    <th style={{ width: '80px' }}>Rank</th>
                                    <th>Nome</th>
                                    <th>Vocação</th>
                                    <th style={{ width: '100px', textAlign: 'center' }}>Level</th>
                                </tr>
                            </thead>
                            <tbody>
                                {highscores.map((player) => (
                                    <tr key={player.rank}>
                                        <td style={{ textAlign: 'center', fontWeight: 'bold' }}>
                                            {player.rank}
                                        </td>
                                        <td>
                                            <a
                                                href={`/character/view?name=${encodeURIComponent(player.name)}`}
                                                style={{ color: '#232675', fontWeight: 'bold', textDecoration: 'none' }}
                                            >
                                                {player.name}
                                            </a>
                                        </td>
                                        <td>{player.vocation}</td>
                                        <td style={{ textAlign: 'center', fontWeight: 'bold' }}>
                                            {player.level}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>

            <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f0f0f0', borderRadius: '5px' }}>
                <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
                    <i className="fa fa-info-circle"></i> Rankings são atualizados a cada 30 minutos.
                    Última atualização: {new Date().toLocaleString('pt-BR')}
                </p>
            </div>
        </div>
    );
}
