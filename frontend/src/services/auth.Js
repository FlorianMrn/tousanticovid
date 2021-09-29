import { axiosInstance } from './API.js';

export function logout() {
    try {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        axiosInstance.defaults.headers['Authorization'] = null;
    } catch (error) {
        throw error;
    }
};


export async function authenticate(credentials) {
    try {
        const response = await axiosInstance.post('login/', credentials);
        axiosInstance.defaults.headers['Authorization'] = "Bearer " + response.data.access;
        localStorage.setItem('access_token', response.data.access);
        localStorage.setItem('refresh_token', response.data.refresh);
        return response;
    } catch(error) {
        throw error;
    }
};