import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

export default function Login() {
    const [formData, setFormData] = useState({ name: '', password: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const login = useAuthStore((state) => state.login);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            await login(formData.name, formData.password);
            navigate('/account');
        } catch (err) {
            setError(err.response?.data?.error || 'Login failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="news fade-in">
            <div className="newsTitle">🎮 Login</div>
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
                    <div className="form-group">
                        <label>👤 Account Name:</label>
                        <input
                            type="text"
                            className="input"
                            placeholder="Digite seu nome de conta"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>🔒 Password:</label>
                        <input
                            type="password"
                            className="input"
                            placeholder="Digite sua senha"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={loading}>
                        {loading ? '⏳ Entrando...' : '🚀 Entrar'}
                    </button>
                </form>

                <hr />

                <p style={{ marginTop: '20px', textAlign: 'center', fontSize: '1rem' }}>
                    Não tem uma conta? <Link to="/register" className="text-gradient" style={{ fontWeight: 'bold', textDecoration: 'none' }}>Criar Conta</Link>
                </p>
            </div>
        </div>
    );
}
