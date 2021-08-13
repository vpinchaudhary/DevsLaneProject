import { bindActionCreators } from 'redux'
import { Group } from '../modal/Group'
import { store } from '../redux'
import { SET_GROUPS, SET_GROUP_QUERY } from './actionConstants'

export const setGroupQuery = (query: string) => ({
  type: SET_GROUP_QUERY,
  payload: query,
})

export const setGroups = (query: string, groups: Group[]) => ({
  type: SET_GROUPS,
  payload: { query, groups },
})

export const groupActions = bindActionCreators(
  {
    groupQuery: setGroupQuery,
    groups: setGroups,
  },
  store.dispatch
)
