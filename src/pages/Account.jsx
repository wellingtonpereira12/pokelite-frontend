import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import api from '../services/api';

export default function Account() {
    const { user, logout, fetchUser } = useAuthStore();
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        try {
            await fetchUser();
            const { data } = await api.get('/characters/my');
            setCharacters(data.characters);
        } catch (error) {
            console.error('Failed to load data:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const handleDelete = async (id) => {
        if (!confirm('Deletar este personagem?')) return;
        try {
            await api.delete(`/characters/${id}`);
            loadData();
        } catch (error) {
            alert('Falha ao deletar personagem');
        }
    };

    if (loading) {
        return (
            <div className="news">
                <div className="newsTitle">Carregando...</div>
                <div className="newsBody" style={{ textAlign: 'center', padding: '40px' }}>
                    <p>Carregando informações...</p>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="news">
                <div className="newsTitle">Minha Conta</div>
                <div className="newsBody">
                    <p><strong>Bem-vindo, {user?.nickname}!</strong></p>
                    <p>Account Name: {user?.name}</p>
                    <p>Email: {user?.email}</p>
                    <button onClick={handleLogout} className="btn btn-secondary" style={{ marginTop: '10px' }}>
                        Logout
                    </button>
                </div>
            </div>

            <div className="news">
                <div className="newsTitle">Meus Personagens ({characters.length}/10)</div>
                <div className="newsBody">
                    {characters.length === 0 ? (
                        <p style={{ textAlign: 'center', padding: '20px', color: '#666' }}>
                            Nenhum personagem ainda.
                        </p>
                    ) : (
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr style={{ borderBottom: '2px solid #232675' }}>
                                    <th style={{ padding: '10px', textAlign: 'left' }}>Nome</th>
                                    <th style={{ padding: '10px', textAlign: 'center' }}>Level</th>
                                    <th style={{ padding: '10px', textAlign: 'center' }}>Sexo</th>
                                    <th style={{ padding: '10px', textAlign: 'center' }}>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {characters.map((char) => (
                                    <tr key={char.id} style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '10px' }}>{char.name}</td>
                                        <td style={{ padding: '10px', textAlign: 'center' }}>{char.level}</td>
                                        <td style={{ padding: '10px', textAlign: 'center' }}>{char.sex === 1 ? 'Male' : 'Female'}</td>
                                        <td style={{ padding: '10px', textAlign: 'center' }}>
                                            <button onClick={() => handleDelete(char.id)} className="btn btn-secondary" style={{ padding: '5px 10px', fontSize: '14px' }}>
                                                Deletar
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </>
    );
}
