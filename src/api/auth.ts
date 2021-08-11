import axios from 'axios'
import { LoginData, LoginRequest } from '../modal/Login'
import { BASE_URL, setToken } from './base'

export const getLogin = (data: LoginRequest) => {
  return axios.post<LoginData>(BASE_URL + '/login', data).then((r) => {
    setToken(r.data.token)
    return r.data.user
  })
}

export const logOut = () => {
  localStorage.removeItem('token')
  window.location.href = '/'
}
