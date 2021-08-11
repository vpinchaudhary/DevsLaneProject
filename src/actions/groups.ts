import { Group } from '../modal/Group'

export const SET_GROUP_QUERY = 'SET_GROUP_QUERY'
export const SET_GROUPS = 'SET_GROUPS'

export const setGroupQuery = (query: string) => ({
  type: SET_GROUP_QUERY,
  payload: query,
})

export const setGroups = (query: string, groups: Group[]) => ({
  type: SET_GROUPS,
  payload: { query, groups },
})
