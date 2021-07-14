import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AuthHero from '../Components/AuthHero'
import LoginPage from './LoginPage'
import SignupPage from './SignupPage'

interface Props {}

const AuthPage: React.FC<Props> = (props) => {
  return (
    <div className='flex flex-row-reverse'>
      <div>
        <Switch>
          <Route path='/login'>
            <LoginPage />
          </Route>
          <Route path='/signup'>
            <SignupPage />
          </Route>
        </Switch>
      </div>
      <AuthHero />
    </div>
  )
}

AuthPage.defaultProps = {}

export default React.memo(AuthPage)
