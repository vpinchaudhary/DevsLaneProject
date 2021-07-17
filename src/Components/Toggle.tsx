import React from 'react'
import { FaCircle } from 'react-icons/fa'

interface Props {
  title: string
  showPass: boolean
  setShow: () => void
}

const Toggle: React.FC<Props> = (props) => {
  return (
    <>
      <div className='flex items-center'>
        <label
          htmlFor='remember-me'
          className='ml-2 block mr-4 text-heading-200'
        >
          {props.title}
        </label>
        <button
          type='button'
          className={
            'relative w-9 h-5 rounded-full ease-in transform duration-200 ' +
            (props.showPass ? 'bg-primary' : 'bg-gray-200')
          }
          onClick={props.setShow}
        >
          <FaCircle
            className={
              'absolute top-0.5 ' +
              (!props.showPass ? 'left-0 text-primary' : 'right-0 text-white')
            }
          />
        </button>
      </div>
    </>
  )
}

Toggle.defaultProps = {}

export default React.memo(Toggle)
