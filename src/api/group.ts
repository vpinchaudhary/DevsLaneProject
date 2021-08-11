import axios from 'axios'
import { Group } from '../modal/Group'
import { GroupRequest } from '../modal/Login'
import { BASE_URL } from './base'

export interface Groups {
  data: Group[]
}

export const fetchGroup = (data: GroupRequest) => {
  const url = BASE_URL + '/groups'
  return axios
    .get<Groups>(url, {
      params: data,
    })
    .then((r) => r.data.data)
}
