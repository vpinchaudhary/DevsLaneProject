import { AppStore } from '../redux'

export const adminUser = (state: AppStore) =>
  state.auth.id && state.user.byId[state.auth.id]
