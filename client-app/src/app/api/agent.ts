import axios, { AxiosResponse } from 'axios';

axios.defaults.baseURL = 'https://localhost:5000/api'

const responseBody = (response: AxiosResponse) => response.data;