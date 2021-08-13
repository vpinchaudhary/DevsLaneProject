import { authStateSelector } from './appSelector'
import { userIdSelector } from './userIdSelector'
import { createSelector } from 'reselect'

export const authIdSelector = createSelector(
  [authStateSelector],
  (authState) => authState.id
)

export const adminUser = createSelector(
  [authIdSelector, userIdSelector],
  (authId, userId) => authId && userId[authId]
)
