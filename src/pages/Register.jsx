import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

export default function Register() {
    const [formData, setFormData] = useState({
        name: '', password: '', email: '', nickname: '',
        characterName: '', sex: 1, vocation: 1, city: 1, world: 0
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const register = useAuthStore((state) => state.register);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            await register(formData);
            navigate('/account');
        } catch (err) {
            setError(err.response?.data?.error || 'Registration failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="news fade-in">
            <div className="newsTitle">🎮 Criar Conta</div>
            <div className="newsBody">
                {error && (
                    <div style={{
                        padding: '15px',
                        background: 'rgba(255, 0, 110, 0.1)',
                        border: '2px solid var(--color-accent-pink)',
                        borderRadius: 'var(--radius-md)',
                        marginBottom: '20px',
                        color: 'var(--color-accent-pink)',
                        fontWeight: '600',
                        textAlign: 'center'
                    }}>
                        ⚠️ {error}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <h3 style={{
                        marginBottom: '20px',
                        color: 'var(--color-accent-cyan)',
                        fontFamily: 'Rajdhani, sans-serif',
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                    }}>
                        📋 Informações da Conta
                    </h3>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                        <div className="form-group">
                            <label>👤 Account Name:</label>
                            <input
                                type="text"
                                className="input"
                                placeholder="Nome da conta"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                                minLength={4}
                            />
                        </div>
                        <div className="form-group">
                            <label>✨ Nickname:</label>
                            <input
                                type="text"
                                className="input"
                                placeholder="Seu apelido"
                                value={formData.nickname}
                                onChange={(e) => setFormData({ ...formData, nickname: e.target.value })}
                                required
                                minLength={4}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>📧 Email:</label>
                        <input
                            type="email"
                            className="input"
                            placeholder="seu@email.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>🔒 Password:</label>
                        <input
                            type="password"
                            className="input"
                            placeholder="Senha segura"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            required
                            minLength={4}
                        />
                    </div>

                    <hr style={{ margin: '30px 0' }} />

                    <h3 style={{
                        marginBottom: '20px',
                        color: 'var(--color-accent-cyan)',
                        fontFamily: 'Rajdhani, sans-serif',
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                    }}>
                        ⚡ Primeiro Personagem
                    </h3>

                    <div className="form-group">
                        <label>🎯 Character Name:</label>
                        <input
                            type="text"
                            className="input"
                            placeholder="Nome do personagem"
                            value={formData.characterName}
                            onChange={(e) => setFormData({ ...formData, characterName: e.target.value })}
                            required
                            minLength={4}
                        />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
                        <div className="form-group">
                            <label>🚻 Sex:</label>
                            <select
                                className="input"
                                value={formData.sex}
                                onChange={(e) => setFormData({ ...formData, sex: parseInt(e.target.value) })}
                            >
                                <option value={1}>♂️ Male</option>
                                <option value={0}>♀️ Female</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>⚔️ Vocation:</label>
                            <select
                                className="input"
                                value={formData.vocation}
                                onChange={(e) => setFormData({ ...formData, vocation: parseInt(e.target.value) })}
                            >
                                <option value={1}>🎮 Pokemon Trainer</option>
                            </select>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={loading}>
                        {loading ? '⏳ Criando...' : '🚀 Criar Conta'}
                    </button>
                </form>

                <hr />

                <p style={{ marginTop: '20px', textAlign: 'center', fontSize: '1rem' }}>
                    Já tem uma conta? <Link to="/login" className="text-gradient" style={{ fontWeight: 'bold', textDecoration: 'none' }}>Fazer Login</Link>
                </p>
            </div>
        </div>
    );
}
