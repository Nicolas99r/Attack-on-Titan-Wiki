import axios from 'axios';

export const charactersApi = axios.create({
    baseURL: process.env.EXPO_PUBLIC_SNK_URL
})