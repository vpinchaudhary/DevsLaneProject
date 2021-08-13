import { createSelector } from 'reselect'
import { userStateSelector } from './appSelector'

export const userIdSelector = createSelector(
  [userStateSelector],
  (userState) => userState.byId
)
