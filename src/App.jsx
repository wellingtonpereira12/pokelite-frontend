import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from './store/authStore';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Account from './pages/Account';
import Highscores from './pages/Highscores';
import CharacterView from './pages/CharacterView';
import Layout from './components/Layout';
import './index.css';

function PrivateRoute({ children }) {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/highscores" element={<Highscores />} />
          <Route path="/character/view" element={<CharacterView />} />
          <Route path="/account" element={<PrivateRoute><Account /></PrivateRoute>} />

          {/* Placeholder routes - you can create these pages later */}
          <Route path="/guilds" element={<div className="news"><div className="newsTitle">Guildas</div><div className="newsBody">Em breve...</div></div>} />
          <Route path="/houses" element={<div className="news"><div className="newsTitle">Casas</div><div className="newsBody">Em breve...</div></div>} />
          <Route path="/download" element={<div className="news"><div className="newsTitle">Download</div><div className="newsBody">Em breve...</div></div>} />
          <Route path="/rules" element={<div className="news"><div className="newsTitle">Regras</div><div className="newsBody">Em breve...</div></div>} />
          <Route path="/recovery" element={<div className="news"><div className="newsTitle">Recuperar Conta</div><div className="newsBody">Em breve...</div></div>} />
          <Route path="/tickets" element={<div className="news"><div className="newsTitle">Tickets</div><div className="newsBody">Em breve...</div></div>} />
          <Route path="/shop" element={<div className="news"><div className="newsTitle">Loja</div><div className="newsBody">Em breve...</div></div>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
