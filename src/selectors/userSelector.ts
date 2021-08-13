import { AppStore } from '../redux'
import { userStateSelector } from './appSelector'
import { authIdSelector } from './authSelector'

export const userIdSelector = (state: AppStore) => {
  const userState = userStateSelector(state)
  return userState.byId
}

export const currentUserSelector = (state: AppStore) => {
  const userId = userIdSelector(state)
  const authId = authIdSelector(state)
  return userId[authId!]
}
