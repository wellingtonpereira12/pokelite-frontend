import { create } from 'zustand';
import api from '../services/api';

export const useAuthStore = create((set) => ({
    user: null,
    token: localStorage.getItem('token'),
    isAuthenticated: !!localStorage.getItem('token'),

    login: async (name, password) => {
        const { data } = await api.post('/auth/login', { name, password });
        localStorage.setItem('token', data.token);
        set({ user: data.account, token: data.token, isAuthenticated: true });
        return data;
    },

    register: async (formData) => {
        const { data } = await api.post('/auth/register', formData);
        localStorage.setItem('token', data.token);
        set({ user: data.account, token: data.token, isAuthenticated: true });
        return data;
    },

    logout: () => {
        localStorage.removeItem('token');
        set({ user: null, token: null, isAuthenticated: false });
    },

    fetchUser: async () => {
        try {
            const { data } = await api.get('/auth/me');
            set({ user: data.account });
        } catch (error) {
            set({ user: null, token: null, isAuthenticated: false });
        }
    }
}));
