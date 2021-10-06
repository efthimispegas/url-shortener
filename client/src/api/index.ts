import axios from 'axios';

const URL = process.env.REACT_APP_API_URL;

const axiosInstance = axios.create({
  baseURL: URL,
  timeoutErrorMessage: 'Request too long to complete, times up!',
});

export const get = (endpoint: string, params?: any): Promise<any> => {
  return axiosInstance.get(`${endpoint}`, { params });
};

export const post = (endpoint: string, body?: any): Promise<any> => {
  return axiosInstance.post(`${endpoint}`, { ...body });
};
