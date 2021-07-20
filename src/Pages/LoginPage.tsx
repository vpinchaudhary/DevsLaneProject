import React, { Fragment, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiUser, FiLock } from 'react-icons/fi'
import { BiLoaderAlt } from 'react-icons/bi'
import Button from '../Components/Button'
import * as yup from 'yup'
import { useFormik } from 'formik'
import InputTexts from '../Components/InputTexts'
import AuthFooter from '../Components/AuthFooter'
import { Switch } from '@headlessui/react'

interface Props {}

const LoginPage: React.FC<Props> = (props) => {
  const [showPass, setShowPass] = useState(false)
  const history = useHistory()

  //using useFormik to make form data which contains email and password
  const { getFieldProps, handleSubmit, isSubmitting, touched, errors } =
    useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      onSubmit: () => {
        setTimeout(() => {
          history.push('/dashboard')
        }, 2000)
      },
      validationSchema: yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().required().min(8),
      }),
    })
  return (
    <div className='min-h-screen flex justify-center items-center px-10 sm:px-6 lg:px-8 flex-1'>
      <div className='max-w-md w-full space-y-12'>
        <div>
          <h2 className='text-4xl font-medium text-heading-200'>
            Log in to{' '}
            <span className='uppercase text-primary font-semibold'>CORK</span>
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
        <form className='mt-8 space-y-10' onSubmit={handleSubmit}>
          <div className='relative'>
            <InputTexts
              {...getFieldProps('email')}
              type='email'
              placeholder='Email Address'
              id='email-address'
              required
              autoComplete='email'
              touched={touched.email}
              errors={errors.email}
              icon={<FiUser />}
            />
          </div>
          <div className='relative'>
            <InputTexts
              {...getFieldProps('password')}
              type={showPass ? 'text' : 'password'}
              placeholder='Password'
              id='password'
              required
              autoComplete='current-password'
              touched={touched.password}
              errors={errors.password}
              icon={<FiLock />}
            />
          </div>
          <div className='flex md:flex-row flex-col md:pt-0 pt-6 md:items-center w-full justify-between'>
            <div className='flex items-center'>
              <Switch.Group>
                <Switch.Label className='mr-4'>Show Password</Switch.Label>
                <Switch
                  checked={showPass}
                  onChange={setShowPass}
                  className={`transform transition ease-in-out duration-200 ${
                    showPass ? 'bg-blue-600' : 'bg-gray-200'
                  } relative inline-flex items-center h-6 rounded-full w-11`}
                >
                  <span
                    className={`transform transition ease-in-out duration-200 ${
                      showPass ? 'translate-x-6' : 'translate-x-1'
                    } inline-block w-4 h-4 transform bg-white rounded-full`}
                  />
                </Switch>
              </Switch.Group>
            </div>
            <div className='relative md:pt-0 pt-6'>
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
        <AuthFooter />
      </div>
    </div>
  )
}

LoginPage.defaultProps = {}

export default React.memo(LoginPage)
