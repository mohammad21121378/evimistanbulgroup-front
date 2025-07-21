import axios from 'axios';

const APIRequest = axios.create({
    baseURL: 'https://admin.facultyfind.com/api/',
});



export default APIRequest;
