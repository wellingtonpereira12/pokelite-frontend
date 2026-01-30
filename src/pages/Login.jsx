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
        <div className="news">
            <div className="newsTitle">Login</div>
            <div className="newsBody">
                {error && (
                    <div style={{ padding: '10px', background: '#ffebee', border: '1px solid #ef5350', borderRadius: '4px', marginBottom: '15px', color: '#c62828' }}>
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Account Name:</label>
                        <input
                            type="text"
                            className="input"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                        />
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Password:</label>
                        <input
                            type="password"
                            className="input"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={loading}>
                        {loading ? 'Entrando...' : 'Entrar'}
                    </button>
                </form>

                <p style={{ marginTop: '15px', textAlign: 'center' }}>
                    Não tem uma conta? <Link to="/register" style={{ color: '#232675', fontWeight: 'bold' }}>Criar Conta</Link>
                </p>
            </div>
        </div>
    );
}
