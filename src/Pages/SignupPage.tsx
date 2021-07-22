import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { BiLoaderAlt } from 'react-icons/bi'
import { FiUser, FiLock } from 'react-icons/fi'
import { SiMailDotRu } from 'react-icons/si'
import Button from '../Components/Button/Button'
import Input from '../Components/Input/Input'
import AuthFooter from '../Components/AuthFooter'
import { Switch } from '@headlessui/react'

interface Props {}

const SignupPage: React.FC<Props> = (props) => {
  const [showPass, setShowPass] = useState(false)
  const history = useHistory()

  //using useFormik to make form data which contains email and password
  const {
    getFieldProps,
    handleSubmit,
    isSubmitting,
    touched,
    errors,
  } = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    onSubmit: () => {
      setTimeout(() => {
        history.push('/login')
      }, 2000)
    },
    validationSchema: yup.object().shape({
      username: yup.string().required().lowercase().max(15),
      email: yup.string().email().required(),
      password: yup.string().required().min(8),
    }),
  })
  return (
    <div className='min-h-screen flex justify-center items-center px-4 sm:px-6 lg:px-8 flex-1'>
      <div className='max-w-md w-full space-y-12'>
        <div>
          <h2 className='text-4xl font-medium text-heading-200'>
            Get started with a free account
          </h2>
          <p className='mt-2 font-semibold text-heading-200'>
            Already Have an account?{' '}
            <Link
              to='/login'
              className='underline hover:no-underline font-bold text-primary'
            >
              Log in
            </Link>
          </p>
        </div>
        <form className='mt-8 space-y-10' onSubmit={handleSubmit}>
          <Input
            {...getFieldProps('username')}
            type='text'
            placeholder='Username'
            id='username'
            required
            touched={touched.username}
            errors={errors.username}
            icon={FiUser}
          />
          <Input
            {...getFieldProps('email')}
            type='email'
            placeholder='Email Address'
            id='email-address'
            required
            autoComplete='email'
            touched={touched.email}
            errors={errors.email}
            icon={SiMailDotRu}
          />
          <Input
            {...getFieldProps('password')}
            type={showPass ? 'text' : 'password'}
            placeholder='Password'
            id='password'
            required
            autoComplete='current-password'
            touched={touched.password}
            errors={errors.password}
            icon={FiLock}
          />
          <div className='flex flex-col w-full justify-around'>
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
                I agree to the{' '}
                <a href='/#' className='text-primary'>
                  terms and conditions
                </a>
              </label>
            </div>
          </div>
          <div className='flex md:flex-row flex-col md:items-center w-full justify-between'>
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
              <Button
                type='submit'
                loading={isSubmitting}
                title='Get Started'
              />
              {isSubmitting && (
                <div>
                  <BiLoaderAlt className='absolute bottom-1 text-white font-extrabold right-6 text-3xl animate-spin ease-in-out' />
                </div>
              )}
            </div>
          </div>
        </form>
        <AuthFooter />
      </div>
    </div>
  )
}

SignupPage.defaultProps = {}

export default React.memo(SignupPage)
