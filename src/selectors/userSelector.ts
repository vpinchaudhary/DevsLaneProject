import { AppStore } from '../redux'

export const currentUserSelector = (state: AppStore) =>
  state.user.byId[state.auth.id!]
