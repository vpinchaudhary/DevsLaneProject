import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiUser, FiLock } from 'react-icons/fi'
import { FaCircle } from 'react-icons/fa'
import { BiLoaderAlt } from 'react-icons/bi'
import Button from '../Components/Button'
import * as yup from 'yup'
import { useFormik } from 'formik'

interface Props {}

const LoginPage: React.FC<Props> = (props) => {
  const [showPass, setShowPass] = useState(false)
  const history = useHistory()

  //using useFormik to make form data which contains email and password
  const {
    getFieldProps,
    handleSubmit,
    isValid,
    isSubmitting,
    touched,
    errors,
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      setTimeout(() => {
        console.log(values)
      }, 5000)
    },
    validationSchema: yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().required().min(8),
    }),
  })
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
        <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
          <div className='relative'>
            <label htmlFor='email-address' className='sr-only'>
              Email Address
            </label>
            <span className='flex items-center relative'>
              <FiUser className='text-primary text-2xl absolute' />
              <input
                {...getFieldProps('email')}
                type='email'
                className='w-full px-8 py-4 border-b border-gray-300 placeholder-gray-400 text-heading-200 outline-none focus:border-primary sm:text-sm'
                placeholder='Email Address'
                id='email-address'
                required
                autoComplete='email'
              />
            </span>
            <div className='text-red-600 text-sm absolute'>
              {touched.email && errors.email}
            </div>
          </div>
          <div className='relative'>
            <label htmlFor='email-address' className='sr-only'>
              Password
            </label>
            <span className='flex items-center relative'>
              <FiLock className='text-primary text-2xl absolute' />
              <input
                {...getFieldProps('password')}
                type={showPass ? 'text' : 'password'}
                className='w-full px-8 py-4 border-b border-gray-300 placeholder-gray-400 text-heading-200 outline-none focus:border-primary sm:text-sm'
                placeholder='Password'
                id='password'
                required
                autoComplete='current-password'
              />
            </span>
            <div className='text-red-600 text-sm absolute'>
              {touched.password && errors.password}
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
              <Button type='submit' loading={isSubmitting} title='Log in' />
              {isSubmitting && (
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
