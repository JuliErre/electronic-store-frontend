// lib/axiosInstance.ts
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL, // Cambia esto a tu URL base
    headers: {
        "Content-Type": "application/json",
    },
});

// Puedes añadir interceptores si es necesario
axiosInstance.interceptors.request.use(
    (config) => {
        // Agregar token de autorización si es necesario
        const token = localStorage.getItem("token"); // o de tu estado global
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Manejar errores globalmente
        return Promise.reject(error);
    }
);

export default axiosInstance;
