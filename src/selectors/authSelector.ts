import { AppStore } from '../redux'
import { authStateSelector } from './appSelector'
import { userIdSelector } from './userSelector'

export const authIdSelector = (state: AppStore) => {
  const authState = authStateSelector(state)
  return authState.id
}

export const adminUser = (state: AppStore) => {
  const authId = authIdSelector(state)
  const userId = userIdSelector(state)
  return authId && userId[authId]
}
