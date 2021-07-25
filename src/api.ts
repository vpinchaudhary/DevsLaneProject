import axios from 'axios'
import { Group } from './groupInterfaces'
import { LoginData } from './loginInterfaces'

const BASE_URL = 'https://api-dev.domecompass.com'

const token = localStorage.getItem('token')

axios.interceptors.request.use((config) => {
  if (!token) {
    return config
  }
  return { ...config, headers: { ...config.headers, Authorization: token } }
})

interface LoginRequest {
  email: string
  password: string
}

interface GroupRequest {
  limit?: number
  offset?: number
  query?: string
  status: 'all-groups' | 'fav' | 'archieve'
}

export const getLogin = (data: LoginRequest) => {
  return axios.post<LoginData>(BASE_URL + '/login', data).then((r) => {
    localStorage.setItem('token', r.data.token)
  })
}

export const fetchGroup = (data: GroupRequest) => {
  const url = BASE_URL + '/groups'
  return axios.get<Group>(url, {
    params: data,
  })
}

export const logOut = () => {
  localStorage.removeItem('token')
  window.location.href = '/'
}
