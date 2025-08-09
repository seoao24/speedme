// lib/axios.js
import useErrorStore from "@/store/errorStore";
import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "https://api.example.com",
    timeout: 10000, // 10s
    headers: {
        "Content-Type": "application/json",
    },
});

// Request interceptor (thêm token, log...)
api.interceptors.request.use(
    (config) => {
        // Lấy token từ localStorage (chỉ chạy ở client)
        if (typeof window !== "undefined") {
            const token = localStorage.getItem("token");
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response interceptor (xử lý lỗi chung)
api.interceptors.response.use(
    (response) => response.data, // Trả luôn data
    (error) => {
        if (typeof window !== "undefined") {
            const message = error.response?.message || "Có lỗi hệ thống xảy ra, vui lòng thử lại."; //Để ý format message response
            useErrorStore.getState().setError(message);
            if (error.response?.status === 401) {
                window.location.href = "/sign-in";
            }
        }
        return Promise.reject(error);
    }
);

export default api;
