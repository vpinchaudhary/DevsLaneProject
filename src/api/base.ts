import axios from 'axios'

export const BASE_URL = 'https://api-dev.domecompass.com'

export const setToken = (token: string) => {
  localStorage.setItem('token', token)
}

export const getToken = () => {
  return localStorage.getItem('token')
}

export const removeToken = () => {
  localStorage.removeItem('token')
}

axios.interceptors.request.use((config) => {
  if (!getToken()) {
    return config
  }
  return {
    ...config,
    headers: { ...config.headers, Authorization: getToken() },
  }
})

axios.interceptors.response.use(undefined, (error) => {
  if (error.response.data.code === 9010) {
    console.log(error)
    removeToken()
    window.location.href = '/login'
  }
  return Promise.reject(error)
})
