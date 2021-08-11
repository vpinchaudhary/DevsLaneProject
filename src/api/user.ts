import axios from 'axios'
import { User } from '../modal/User'
import { BASE_URL } from './base'

export const me = () => {
  return axios
    .get<{ data: User }>(BASE_URL + '/me')
    .then((res) => res.data.data)
}
