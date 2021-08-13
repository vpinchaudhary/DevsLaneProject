import { authIdSelector } from './authSelector'
import { createSelector } from 'reselect'
import { userIdSelector } from './userIdSelector'

export const currentUserSelector = createSelector(
  [userIdSelector, authIdSelector],
  (userId, authId) => userId[authId!]
)
