import React from 'react'
import { Link } from 'react-router-dom'

interface Props {}

const SignupPage: React.FC<Props> = (props) => {
  return (
    <div>
      <h2>This is sign up page</h2>
      <h3>
        Already have an account Click here to <Link to='/login'>Login</Link>
      </h3>
    </div>
  )
}

SignupPage.defaultProps = {}

export default React.memo(SignupPage)
