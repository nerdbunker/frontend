import axios from 'axios'

export const http = axios.create({
  baseURL: 'https://vicelulas.azurewebsites.net/api/organismo/',
  timeout: 20000,
  withCredentials: false
})
