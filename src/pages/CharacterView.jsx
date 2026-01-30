import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function CharacterView() {
    const [searchParams] = useSearchParams();
    const [searchName, setSearchName] = useState(searchParams.get('name') || '');
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const name = searchParams.get('name');
        if (name) {
            setSearchName(name);
            searchCharacter(name);
        }
    }, [searchParams]);

    const searchCharacter = async (name) => {
        if (!name.trim()) {
            setError('Por favor, digite um nome válido.');
            return;
        }

        try {
            setLoading(true);
            setError('');

            // Mock data - substituir pela chamada real da API
            // const response = await fetch(`/api/characters/${name}`);
            // const data = await response.json();

            // Simulando dados
            setTimeout(() => {
                if (name.toLowerCase() === 'ash') {
                    setCharacter({
                        name: 'Ash',
                        level: 352,
                        vocation: 'Elite Trainer',
                        world: 'PokeElite',
                        residence: 'Pallet Town',
                        lastLogin: '30/01/2026 18:45:32',
                        accountStatus: 'Free Account',
                        achievements: 127,
                        badges: ['Boulder', 'Cascade', 'Thunder', 'Rainbow', 'Soul', 'Marsh', 'Volcano', 'Earth']
                    });
                } else {
                    setError('Personagem não encontrado.');
                    setCharacter(null);
                }
                setLoading(false);
            }, 500);
        } catch (err) {
            console.error('Error searching character:', err);
            setError('Erro ao buscar personagem. Tente novamente.');
            setLoading(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        searchCharacter(searchName);
    };

    return (
        <div>
            {/* Formulário de Busca */}
            <div className="news">
                <div className="newsTitle">
                    Procurar Personagem
                </div>
                <div className="newsBody">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Nome do Personagem:</label>
                            <input
                                type="text"
                                value={searchName}
                                onChange={(e) => setSearchName(e.target.value)}
                                placeholder="Digite o nome do personagem"
                                className="input"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            <i className="fa fa-search"></i> Buscar
                        </button>
                    </form>
                </div>
            </div>

            {/* Loading */}
            {loading && (
                <div className="news" style={{ marginTop: '20px' }}>
                    <div className="newsBody" style={{ textAlign: 'center', padding: '40px' }}>
                        <div className="spinner" style={{ margin: '0 auto' }}></div>
                        <p style={{ marginTop: '20px' }}>Buscando personagem...</p>
                    </div>
                </div>
            )}

            {/* Error */}
            {error && !loading && (
                <div className="news" style={{ marginTop: '20px' }}>
                    <div className="newsBody">
                        <div style={{
                            padding: '15px',
                            backgroundColor: '#ffe6e6',
                            border: '1px solid #ff4444',
                            borderRadius: '5px',
                            color: '#cc0000'
                        }}>
                            <i className="fa fa-exclamation-triangle"></i> {error}
                        </div>
                    </div>
                </div>
            )}

            {/* Character Info */}
            {character && !loading && (
                <div className="news" style={{ marginTop: '20px' }}>
                    <div className="newsTitle">
                        Informações do Personagem: {character.name}
                    </div>
                    <div className="newsBody">
                        <table style={{ width: '100%', marginBottom: '20px' }}>
                            <tbody>
                                <tr>
                                    <td style={{ width: '200px', fontWeight: 'bold', padding: '10px' }}>
                                        Nome:
                                    </td>
                                    <td style={{ padding: '10px' }}>{character.name}</td>
                                </tr>
                                <tr>
                                    <td style={{ fontWeight: 'bold', padding: '10px' }}>Level:</td>
                                    <td style={{ padding: '10px' }}>{character.level}</td>
                                </tr>
                                <tr>
                                    <td style={{ fontWeight: 'bold', padding: '10px' }}>Vocação:</td>
                                    <td style={{ padding: '10px' }}>{character.vocation}</td>
                                </tr>
                                <tr>
                                    <td style={{ fontWeight: 'bold', padding: '10px' }}>Mundo:</td>
                                    <td style={{ padding: '10px' }}>{character.world}</td>
                                </tr>
                                <tr>
                                    <td style={{ fontWeight: 'bold', padding: '10px' }}>Residência:</td>
                                    <td style={{ padding: '10px' }}>{character.residence}</td>
                                </tr>
                                <tr>
                                    <td style={{ fontWeight: 'bold', padding: '10px' }}>Último Login:</td>
                                    <td style={{ padding: '10px' }}>{character.lastLogin}</td>
                                </tr>
                                <tr>
                                    <td style={{ fontWeight: 'bold', padding: '10px' }}>Status:</td>
                                    <td style={{ padding: '10px' }}>{character.accountStatus}</td>
                                </tr>
                                <tr>
                                    <td style={{ fontWeight: 'bold', padding: '10px' }}>Conquistas:</td>
                                    <td style={{ padding: '10px' }}>{character.achievements}</td>
                                </tr>
                            </tbody>
                        </table>

                        {character.badges && character.badges.length > 0 && (
                            <div>
                                <h3 style={{ color: '#232675', marginBottom: '10px' }}>
                                    Badges Conquistadas:
                                </h3>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                    {character.badges.map((badge, index) => (
                                        <span
                                            key={index}
                                            style={{
                                                padding: '5px 15px',
                                                backgroundColor: '#232675',
                                                color: 'white',
                                                borderRadius: '20px',
                                                fontSize: '14px',
                                                fontWeight: 'bold'
                                            }}
                                        >
                                            🏅 {badge}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
