import React from 'react'
import { InputHTMLAttributes } from 'react'
import { IconType } from 'react-icons/lib'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode
  placeholder?: string
  touched?: boolean
  errors?: string
}

const InputTexts: React.FC<Props> = ({
  icon,
  placeholder,
  touched,
  className,
  errors,
  ...rest
}) => {
  return (
    <>
      <div className='relative'>
        <label htmlFor='email-address' className='sr-only'>
          {placeholder}
        </label>
        <span className='flex items-center relative'>
          {icon}
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

InputTexts.defaultProps = {}

export default React.memo(InputTexts)
