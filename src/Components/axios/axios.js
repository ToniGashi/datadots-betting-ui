import axiosLib from 'axios';

const axios = axiosLib.create({
  baseURL: process.env.REACT_APP_DOMAIN,
  withCredentials: true
});

export default axios;
