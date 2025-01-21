//src/services/factusApi.js
import axios from 'axios';

const factusApi = axios.create({
  baseURL: import.meta.env.REACT_APP_FACTUS_API_URL,
});

factusApi.interceptors.request.use(
  async (config) => {
    const token = await tokenService.getValidToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export { factusApi };