import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';

const API_URL = 'https://api.themoviedb.org/3/movie';
const ACCESS_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NzNmYWNhMzMwNmZjY2Q1MmY0YzA5MzZhOWNjZGU5MSIsIm5iZiI6MTc0ODY0NTI3MC4wOTUsInN1YiI6IjY4M2EzNTk2NWNkMjg5Nzg1ZWQyMGI3MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H9cwcNsBLkr7J4-aDYFh1fJjd4PVAt7d-vIx2H3hKqI';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_URL,
});

export const dispatchRequest = async (request: AxiosRequestConfig) => {
  try {
    axiosInstance.defaults.headers!.common['Content-Type'] = 'application/json';
    axiosInstance.defaults.headers!.common!.Accept = 'application/json';
    axiosInstance.defaults.headers!.common.Authorization = `Bearer ${ACCESS_TOKEN}`;
    const resource = await axiosInstance.request(request);
    return Promise.resolve(resource);
  } catch (error) {
    return Promise.reject(error);
  }
};
