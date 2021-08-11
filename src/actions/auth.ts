import { bindActionCreators } from 'redux'
import { User } from '../modal/User'
import { store } from '../redux'
import { SET_LOGIN, SET_ME } from './constants'

export const setMe = (user: User) => ({ type: SET_ME, payload: user })
export const setLogin = (user: User) => ({ type: SET_LOGIN, payload: user })

export const authActions = bindActionCreators(
  {
    me: setMe,
    login: setLogin,
  },
  store.dispatch
)
