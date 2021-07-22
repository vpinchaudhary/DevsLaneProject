import React, { useState } from 'react'
import { IoClose } from 'react-icons/io5'

export interface Props {
  title?: string
  message?: string
  theme?: 'primary' | 'warning' | 'success' | 'info' | 'error'
  outline?: boolean
}

const Alerts: React.FC<Props> = (props) => {
  const [show, setShow] = useState<boolean>(true)

  let className = ''
  switch (props.theme) {
    case 'primary':
      className = !props.outline
        ? 'text-indigo-600 bg-indigo-100'
        : 'text-gray-600 border border-indigo-600'
      break
    case 'warning':
      className = !props.outline
        ? 'text-yellow-600 bg-yellow-100'
        : 'text-gray-600 border border-yellow-600'
      break
    case 'success':
      className = !props.outline
        ? 'text-green-600 bg-green-100'
        : 'text-gray-600 border border-green-600'
      break
    case 'info':
      className = !props.outline
        ? 'text-blue-600 bg-blue-100'
        : 'text-gray-600 border border-blue-600'
      break
    case 'error':
      className = !props.outline
        ? 'text-red-600 bg-red-100'
        : 'text-gray-600 border border-red-600'
      break
  }

  return (
    <>
      {show && (
        <div
          id='alert'
          className={
            'flex justify-between px-5 py-3 max-w-3xl mx-auto items-center rounded-md m-4 ' +
            className
          }
        >
          <span>
            <strong>{props.title}</strong> {props.message}
          </span>
          <button
            type='button'
            className={
              'outline-none cursor-pointer ' + (!props.outline && className)
            }
            onClick={() => setShow(false)}
          >
            <IoClose />
          </button>
        </div>
      )}
    </>
  )
}

Alerts.defaultProps = {
  title: 'Primary!',
  message: 'This is a message.',
  theme: 'primary',
  outline: false,
}

export default React.memo(Alerts)
