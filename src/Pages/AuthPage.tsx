import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AuthHero from '../Components/AuthHero'
import LoginPage from './LoginPage'
import SignupPage from './SignupPage'

interface Props {}

const AuthPage: React.FC<Props> = (props) => {
  return (
    <div className='flex justify-between md:flex-row flex-col-reverse w-full'>
      <Switch>
        <Route path='/login'>
          <LoginPage />
        </Route>
        <Route path='/signup'>
          <SignupPage />
        </Route>
      </Switch>
      <AuthHero />
    </div>
  )
}

AuthPage.defaultProps = {}

export default React.memo(AuthPage)
