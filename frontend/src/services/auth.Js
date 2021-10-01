import { axiosInstance } from './API.js';
import axios from 'axios';
import * as qs from 'qs';
import { toast } from 'react-toastify';
import jwtDecode from "jwt-decode";

export async function logout(history) {
    try {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        axiosInstance.defaults.headers['Authorization'] = null;
        toast.success('Vous êtres déconnecté !');
        return history.push('/administration');
    } catch (error) {
        throw error;
    }
};


export async function authenticate(credentials, history) {

        let data = qs.stringify(credentials);
        let config = {
            method: 'post',
            url: `${process.env.REACT_APP_BASE_URL}token/obtain/`,
            headers: { 
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data : data
        };
      
        axios(config)
        .then((response) => {
            localStorage.setItem('access_token', response.data.access);
            localStorage.setItem('refresh_token', response.data.refresh);
            axios.defaults.headers["Authorization"] = "Bearer " + response.data.access;
            toast.success('Vous êtres connecté !');
            return history.push('/administration/admin');
        })
        .catch((error) => {
            return toast.error("Mauvais mot de passe et/ou numéro d'agent");
        });
};

export async function isAuthenticated() {
    
    const token = localStorage.getItem("access_token");
    const token_refresh = localStorage.getItem("refresh_token");

    if (token) {
        const { exp: expiration } = jwtDecode(token);
        if (expiration * 1000 > new Date().getTime()) {
            return true;
        }

        if (token_refresh) {
                let data = qs.stringify({'refresh': token_refresh});
                let config = {
                    method: 'post',
                    url: `${process.env.REACT_APP_BASE_URL}token/refresh/`,
                    headers: { 
                    'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    data : data
                };
              
                axios(config)
                .then((response) => {
                    localStorage.setItem('access_token', response.data.access);
                    localStorage.setItem('refresh_token', response.data.refresh);
                    axios.defaults.headers["Authorization"] = "Bearer " + response.data.access;
                    return true;
                })
                .catch((error) => {
                    return false;
                });
        }

        return false;
    }

    return false;
};