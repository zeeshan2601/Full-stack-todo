import axios from 'axios';
import useAuthStore from '../store/authStore.js';

// Create the axios instance
const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api',
    timeout: 10000,
});

// Attach the token (if present) to every request
axiosInstance.interceptors.request.use(
    (config) => {
        // Get token from store (if available)
        const token = useAuthStore.getState().token;
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        // Always set Content-Type for POST/PUT/PATCH requests
        if (
            ['post', 'put', 'patch'].includes(config.method) &&
            !config.headers['Content-Type']
        ) {
            config.headers['Content-Type'] = 'application/json';
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
