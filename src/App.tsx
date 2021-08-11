import React, { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import ErrorPage from './Pages/ErrorPage'
import { me } from './api/user'
import { getToken } from './api/base'
import { useAppSelector } from './redux'
import { authActions } from './actions/auth'

const Container = lazy(() => import('./Pages/Container'))
const AuthPage = lazy(() => import('./Pages/AuthPage'))

interface Props {}

const App: React.FC<Props> = () => {
  const user = useAppSelector(
    (state) => state.auth.id && state.user.byId[state.auth.id]
  )
  const token = getToken()
  useEffect(() => {
    if (!token) {
      return
    }
    me().then((response) => {
      authActions.me(response)
    })
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact>
            {user ? <Redirect to='/dashboard' /> : <Redirect to='/login' />}
          </Route>
          <Route path={['/login', '/signup']} exact>
            {!user ? <AuthPage /> : <Redirect to='/dashboard' />}
          </Route>
          <Route
            path={[
              '/dashboard',
              '/recordings',
              '/batch/:batchNo/lecture/:lectureNo',
            ]}
            exact
          >
            {user ? <Container /> : <Redirect to='/login' />}
          </Route>
          <Route>
            <ErrorPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </Suspense>
  )
}

App.defaultProps = {}

export default React.memo(App)
