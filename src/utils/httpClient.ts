// imports from vendors
import axios from 'axios';

// imports from utils
import HttpError from './httpError';

const HttpClient = axios.create();

HttpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const httpError = new HttpError({
      status: error.response.status,
      message: error.response.statusText,
    });
    return Promise.reject({ error: httpError });
  },
);

export default HttpClient;
