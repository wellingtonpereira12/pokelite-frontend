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
        <div className="news">
            <div className="newsTitle">Criar Conta</div>
            <div className="newsBody">
                {error && (
                    <div style={{ padding: '10px', background: '#ffebee', border: '1px solid #ef5350', borderRadius: '4px', marginBottom: '15px', color: '#c62828' }}>
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <h3 style={{ marginBottom: '10px', color: '#232675' }}>Informações da Conta</h3>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '15px' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Account Name:</label>
                            <input type="text" className="input" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required minLength={4} />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Nickname:</label>
                            <input type="text" className="input" value={formData.nickname} onChange={(e) => setFormData({ ...formData, nickname: e.target.value })} required minLength={4} />
                        </div>
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Email:</label>
                        <input type="email" className="input" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Password:</label>
                        <input type="password" className="input" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} required minLength={4} />
                    </div>

                    <h3 style={{ marginBottom: '10px', color: '#232675' }}>Primeiro Personagem</h3>

                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Character Name:</label>
                        <input type="text" className="input" value={formData.characterName} onChange={(e) => setFormData({ ...formData, characterName: e.target.value })} required minLength={4} />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '20px' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Sex:</label>
                            <select className="input" value={formData.sex} onChange={(e) => setFormData({ ...formData, sex: parseInt(e.target.value) })}>
                                <option value={1}>Male</option>
                                <option value={0}>Female</option>
                            </select>
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Vocation:</label>
                            <select className="input" value={formData.vocation} onChange={(e) => setFormData({ ...formData, vocation: parseInt(e.target.value) })}>
                                <option value={1}>Pokemon Trainer</option>
                            </select>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={loading}>
                        {loading ? 'Criando...' : 'Criar Conta'}
                    </button>
                </form>

                <p style={{ marginTop: '15px', textAlign: 'center' }}>
                    Já tem uma conta? <Link to="/login" style={{ color: '#232675', fontWeight: 'bold' }}>Fazer Login</Link>
                </p>
            </div>
        </div>
    );
}
