import { groupStateSelector } from './appSelector'
import { createSelector } from 'reselect'

export const groupQuerySelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.query
)

const groupQueryMapSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.queryMap
)

const groupIdSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.byId
)

export const groupListSelector = createSelector(
  [groupQuerySelector, groupQueryMapSelector, groupIdSelector],
  (query, queryMap, groupId) => {
    const groupIds = queryMap[query] || []
    const groups = groupIds.map((id) => groupId[id])
    return groups
  }
)
