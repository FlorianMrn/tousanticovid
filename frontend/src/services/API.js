import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 5000,
    headers: {
        'Authorization': "Bearer " + localStorage.getItem("access_token"),
        'Content-Type': 'application/json',
        'accept': 'application/json'
    }
});

axiosInstance.interceptors.response.use(response => {
    
    return response 
    }, async function (error) {
    
    const originalRequest = error.config;
    const refresh_token = localStorage.getItem('refresh_token');

    if (error.response.status === 401 && error.response.statusText === "Unauthorized" && refresh_token) {

            return axiosInstance
            .post('token/refresh/', {refresh : refresh_token})
            .then((response) => {

                localStorage.setItem('access_token', response.data.access);
                localStorage.setItem('refresh_token', response.data.refresh);

                axiosInstance.defaults.headers['Authorization'] = "Bearer " + response.data.access;
                originalRequest.headers['Authorization'] = "Bearer " + response.data.access;

                return axiosInstance(originalRequest);
            })
            .catch((error) => {
                return console.error("olla", error);
            });
    }

    return Promise.reject("error", error);
});