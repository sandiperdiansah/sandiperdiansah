import axios, { AxiosInstance } from 'axios';

export const httpRequest: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    timeout: 10000,
    headers: {
        Accept: 'application/json',
    },
    withCredentials: true,
});
