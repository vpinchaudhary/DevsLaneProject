import { Reducer } from 'redux'
import { SET_GROUPS, SET_GROUP_QUERY } from '../actions/constants'
import { Group } from '../modal/Group'

export interface GroupState {
  byId: {
    [id: number]: Group
  }
  query: string
  queryMap: { [keyword: string]: number[] }
}

const initialState: GroupState = {
  byId: {},
  query: '',
  queryMap: {},
}

export const groupReducer: Reducer<GroupState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SET_GROUP_QUERY:
      return { ...state, query: action.payload }
    case SET_GROUPS:
      const groups = action.payload.groups as Group[]
      const groupIds = groups.map((g) => g.id)
      const groupMap = groups.reduce((prev, group) => {
        return { ...prev, [group.id]: group }
      }, {})

      return {
        ...state,
        queryMap: {
          ...state.queryMap,
          [action.payload.query]: groupIds,
        },
        byId: { ...state.byId, ...groupMap },
      }

    default:
      return state
  }
}
