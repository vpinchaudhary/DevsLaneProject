import React from 'react'
import { InputHTMLAttributes } from 'react'
import { IconType } from 'react-icons/lib'

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  icon?: IconType
  placeholder?: string
  touched?: boolean
  errors?: string
}

const Input: React.FC<Props> = ({
  icon,
  placeholder,
  touched,
  className,
  errors,
  ...rest
}) => {
  const Icon = icon
  return (
    <>
      <div className='relative'>
        <label htmlFor='email-address' className='sr-only'>
          {placeholder}
        </label>
        <span className='flex items-center relative'>
          {Icon && <Icon className='text-primary text-2xl absolute' />}
          <input
            {...rest}
            className={
              'w-full px-8 py-4 border-b border-gray-300 placeholder-gray-400 text-heading-200 outline-none focus:border-primary sm:text-sm ' +
              className
            }
            placeholder={placeholder}
          />
        </span>
        <div className='text-red-600 text-sm absolute'>{touched && errors}</div>
      </div>
    </>
  )
}

Input.defaultProps = {
  touched: false,
  errors: '',
}

export default React.memo(Input)
