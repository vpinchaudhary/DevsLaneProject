import { AppStore } from '../redux'
import { groupStateSelector } from './appSelector'

export const GroupQuerySelector = (state: AppStore) => {
  const groupState = groupStateSelector(state)
  return groupState.query
}

export const groupQueryMapSelector = (state: AppStore) => {
  const groupState = groupStateSelector(state)
  return groupState.queryMap
}

export const groupIdSelector = (state: AppStore) => {
  const groupState = groupStateSelector(state)
  return groupState.byId
}

export const groupListSelector = (state: AppStore) => {
  const query = GroupQuerySelector(state)
  const queryMap = groupQueryMapSelector(state)
  const groupId = groupIdSelector(state)
  const groupIds = queryMap[query] || []
  const groups = groupIds.map((id) => groupId[id])
  return groups
}
