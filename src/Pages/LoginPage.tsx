import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiUser, FiLock } from 'react-icons/fi'
import { FaCircle } from 'react-icons/fa'
import { BiLoaderAlt } from 'react-icons/bi'
import Button from '../Components/Button'

interface Props {}

const LoginPage: React.FC<Props> = (props) => {
  const [showPass, setShowPass] = useState(false)
  const [data, setData] = useState({ email: '', password: '' })
  const [dirty, setDirty] = useState({ email: false, password: false })
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setDirty({ ...dirty, [e.target.name]: true })
  }

  let emailError = ''
  let passwordError = ''

  if (!data.email) {
    emailError = 'Email address is required'
  } else if (
    !data.email.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )
  ) {
    emailError = 'Enter a valid email address'
  }

  if (!data.password) {
    passwordError = 'Password address is required'
  } else if (data.password.length < 8) {
    passwordError = 'Password must be atleast 8 characters long'
  }
  return (
    <div className='min-h-screen flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8 flex-1'>
      <div className='max-w-md w-full space-y-8'>
        <div>
          <h2 className='mt-6 text-4xl font-medium text-heading-200'>
            Log in to your{' '}
            <span className='uppercase text-primary font-semibold'>
              account
            </span>
          </h2>
          <p className='mt-2 font-semibold text-heading-200'>
            New Here?{' '}
            <Link
              to='/signup'
              className='underline hover:no-underline font-bold text-primary'
            >
              Create an account
            </Link>
          </p>
        </div>
        <form
          className='mt-8 space-y-6'
          onSubmit={(event) => {
            event.preventDefault()
            if (emailError || passwordError) {
              return
            }
            setLoading(true)
            history.push('/dashboard')
          }}
        >
          <div className='relative'>
            <label htmlFor='email-address' className='sr-only'>
              Email Address
            </label>
            <span className='flex items-center relative'>
              <FiUser className='text-primary text-2xl absolute' />
              <input
                type='email'
                className='w-full px-8 py-4 border-b border-gray-300 placeholder-gray-400 text-heading-200 outline-none focus:border-primary sm:text-sm'
                placeholder='Email Address'
                id='email-address'
                name='email'
                required
                autoComplete='email'
                value={data.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </span>
            <div className='text-red-600 text-sm absolute'>
              {dirty.email && emailError}
            </div>
          </div>
          <div className='relative'>
            <label htmlFor='email-address' className='sr-only'>
              Password
            </label>
            <span className='flex items-center relative'>
              <FiLock className='text-primary text-2xl absolute' />
              <input
                type={showPass ? 'text' : 'password'}
                className='w-full px-8 py-4 border-b border-gray-300 placeholder-gray-400 text-heading-200 outline-none focus:border-primary sm:text-sm'
                placeholder='Password'
                id='password'
                name='password'
                required
                autoComplete='current-password'
                value={data.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </span>
            <div className='text-red-600 text-sm absolute'>
              {dirty.password && passwordError}
            </div>
          </div>
          <div className='flex items-center w-full justify-between'>
            <div className='flex items-center'>
              <label
                htmlFor='remember-me'
                className='ml-2 block mr-4 text-heading-200'
              >
                Show Password
              </label>
              <button
                type='button'
                className={
                  'relative w-9 h-5 rounded-full ease-in transform duration-200 ' +
                  (showPass ? 'bg-primary' : 'bg-gray-200')
                }
                onClick={() => setShowPass(!showPass)}
              >
                <FaCircle
                  className={
                    'absolute top-0.5 ' +
                    (!showPass ? 'left-0 text-primary' : 'right-0 text-white')
                  }
                />
              </button>
            </div>

            <div className='relative'>
              <Button type='submit' loading={loading} title='Log in' />
              {loading && (
                <div>
                  <BiLoaderAlt className='absolute bottom-1 text-white font-extrabold right-6 text-3xl animate-spin ease-in-out' />
                </div>
              )}
            </div>
          </div>

          <div className='flex flex-col w-full justify-around items-center'>
            <div className='items-center flex'>
              <input
                id='remember-me'
                name='remember-me'
                type='checkbox'
                className='h-4 w-4 border-gray-300 rounded'
              />
              <label
                htmlFor='remember-me'
                className='ml-2 block text-heading-100'
              >
                Keep me logged in
              </label>
            </div>
            <Link
              to='/forgot-password'
              className='block mt-4 font-medium text-indigo-600 hover:text-indigo-500'
            >
              Forgot your password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

LoginPage.defaultProps = {}

export default React.memo(LoginPage)
