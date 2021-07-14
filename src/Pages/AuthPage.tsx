import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LoginPage from './LoginPage'
import SignupPage from './SignupPage'

interface Props {}

const AuthPage: React.FC<Props> = (props) => {
  return (
    <div className='flex w-full'>
      <Switch>
        <Route path='/login'>
          <LoginPage />
        </Route>
        <Route path='/signup'>
          <SignupPage />
        </Route>
      </Switch>
      <div className='h-screen bg-black text-white'>
        This is the hero section
      </div>
    </div>
  )
}

AuthPage.defaultProps = {}

export default React.memo(AuthPage)
