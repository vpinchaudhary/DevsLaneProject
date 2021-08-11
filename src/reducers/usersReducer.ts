import { Reducer } from 'redux'
import { SET_LOGIN, SET_ME } from '../actions/constants'
import { User } from '../modal/User'

export interface UserState {
  byId: {
    [id: number]: User
  }
}

const initialState: UserState = {
  byId: {},
}

export const userReducer: Reducer<UserState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SET_ME:
    case SET_LOGIN:
      return {
        ...state,
        byId: { ...state.byId, [action.payload.id]: action.payload },
      }
    default:
      return state
  }
}
