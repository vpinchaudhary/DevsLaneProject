import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { combineReducers, createStore } from 'redux'
import { authReducer } from './reducers/authReducer'
import { groupReducer } from './reducers/groupsReducer'
import { userReducer } from './reducers/usersReducer'

//implementing reducer function
const reducer = combineReducers({
  user: userReducer,
  groups: groupReducer,
  auth: authReducer,
})

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

type AppStore = ReturnType<typeof reducer>

export const useAppSelector: TypedUseSelectorHook<AppStore> = useSelector
