import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
    }
});

export const getArticles = () => {
    try {
        const response = axiosInstance.post('/articles');
        console.log(response.data)
    } catch (error) {
        throw error;
    }
    
};