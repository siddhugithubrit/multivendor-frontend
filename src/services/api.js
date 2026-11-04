import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:8081/api', // आपल्या Spring Boot बॅकएंडची URL
});

// प्रत्येक सेक्युरेड रिक्वेस्टसोबत JWT टोकन आपोआप पाठवण्यासाठी
API.interceptors.request.use((req) => {
    const token = localStorage.getItem('token');
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
});

export default API;