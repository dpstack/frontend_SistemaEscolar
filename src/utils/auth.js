import axios from 'axios';
import config from 'config';

export const isAuthenticated = async () => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${config.apiUrl}/usuarios/perfil`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return response.status === 200;
    } catch (error) {
        return false;
    }
};

export const getDataAuth = async () => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${config.apiUrl}/usuarios/perfil`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return response.data;
    } catch (error) {
        return false;
    }
}
