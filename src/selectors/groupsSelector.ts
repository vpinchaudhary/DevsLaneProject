import { AppStore } from '../redux'

export const GroupQuerySelector = (state: AppStore) => state.groups.query

export const groupListSelector = (state: AppStore) => {
  const groupIds = state.groups.queryMap[state.groups.query] || []
  const groups = groupIds.map((id) => state.groups.byId[id])
  return groups
}
