import axios from 'axios';
import useAuthStore from '../store/authStore.js';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api',
    timeout: 10000,
})

axiosInstance.interceptors.request.use(
    (config)=>{
        const token = useAuthStore.getState().token;
        if(token){
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error)=>{
        return Promise.reject(error);
    }
)

export default axiosInstance;   

