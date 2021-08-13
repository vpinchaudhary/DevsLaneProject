import { AppStore } from '../redux'
import { userStateSelector } from './appSelector'
import { authIdSelector } from './authSelector'
import { createSelector } from 'reselect'

export const userIdSelector = createSelector(
  [userStateSelector],
  (userState) => userState.byId
)

export const currentUserSelector = createSelector(
  [userIdSelector, authIdSelector],
  (userId, authId) => userId[authId!]
)
