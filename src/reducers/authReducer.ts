import { Reducer } from 'redux'

export interface AuthState {
  id?: number
}

const initialState: AuthState = {}

export const authReducer: Reducer<AuthState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case 'SET_ME':
    case 'SET_LOGIN':
      return {
        ...state,
        id: action.payload.id,
      }
    default:
      return state
  }
}
