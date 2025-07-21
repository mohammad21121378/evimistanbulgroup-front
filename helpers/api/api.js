import axios from 'axios';

const APIRequest = axios.create({
    baseURL: 'https://admin.evimistanbulgroup.com/api/',

});

export default APIRequest;