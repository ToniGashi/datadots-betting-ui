import axiosLib from 'axios';

const axios = axiosLib.create({
  baseURL: 'http://localhost:8081',
  withCredentials: true
});

export default axios;
