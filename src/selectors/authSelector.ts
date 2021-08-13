import { authStateSelector } from './appSelector'
import { userIdSelector } from './userSelector'
import { createSelector } from 'reselect'

export const authIdSelector = createSelector(
  [authStateSelector],
  (authState) => authState.id
)

export const adminUser = createSelector(
  [authIdSelector, userIdSelector],
  (authId, userId) => authId && userId[authId]
)
