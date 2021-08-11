import { User } from '../modal/User'

export const SET_ME = 'SET_ME'
export const SET_LOGIN = 'SET_LOGIN'

export const setMe = (user: User) => ({ type: SET_ME, payload: user })
export const setLogin = (user: User) => ({ type: SET_LOGIN, payload: user })
