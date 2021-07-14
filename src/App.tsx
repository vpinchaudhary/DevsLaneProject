import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Container from './Pages/Container'
import AuthPage from './Pages/AuthPage'
import ErrorPage from './Pages/ErrorPage'

interface Props {}

const App: React.FC<Props> = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={['/login', '/signup']} exact>
          <AuthPage />
        </Route>
        <Route
          path={[
            '/dashboard',
            '/recordings',
            '/batch/:batchNo/lecture/:lectureNo',
          ]}
          exact
        >
          <Container />
        </Route>
        <Route path={['/login', '/signup']} exact>
          <AuthPage />
        </Route>
        <Route path='/' exact>
          <Redirect to='/login' />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

App.defaultProps = {}

export default React.memo(App)
