import React from 'react'
import { Link } from 'react-router-dom'

interface Props {}

const LoginPage: React.FC<Props> = (props) => {
  return (
    <div>
      <h2>This is sign up page</h2>
      <h3>
        New Here Click here to <Link to='/signup'>Create new Account</Link>
      </h3>
      <Link to='/dashboard'>DashBoard</Link>
    </div>
  )
}

LoginPage.defaultProps = {}

export default React.memo(LoginPage)
