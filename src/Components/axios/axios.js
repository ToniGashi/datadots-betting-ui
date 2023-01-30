import axiosLib from 'axios';

const axios = axiosLib.create({
  baseURL: process.env.domain,
  withCredentials: true
});

export default axios;
