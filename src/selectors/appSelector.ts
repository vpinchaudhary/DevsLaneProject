import { AppStore } from '../redux'

export const groupStateSelector = (state: AppStore) => state.groups
export const authStateSelector = (state: AppStore) => state.auth
export const userStateSelector = (state: AppStore) => state.user
