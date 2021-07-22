import React from 'react'
import { ButtonHTMLAttributes } from 'react'

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'submit' | 'reset' | 'button'
  theme?: 'primary' | 'warning' | 'success' | 'info' | 'error'
  title: string
  loading?: boolean
  rounded?: boolean
  outline?: boolean
}

const Button: React.FC<Props> = ({ theme, type, title, loading, ...props }) => {
  let className = ''
  switch (theme) {
    case 'primary':
      className = !props.outline
        ? 'text-white bg-indigo-500'
        : 'text-indigo-500 border border-indigo-500'
      break
    case 'warning':
      className = !props.outline
        ? 'text-white bg-yellow-500'
        : 'text-yellow-500 border border-yellow-500'
      break
    case 'success':
      className = !props.outline
        ? 'text-white bg-green-500'
        : 'text-green-500 border border-green-500'
      break
    case 'info':
      className = !props.outline
        ? 'text-white bg-blue-500'
        : 'text-blue-500 border border-blue-500'
      break
    case 'error':
      className = !props.outline
        ? 'text-white bg-red-500'
        : 'text-red-500 border border-red-500'
      break
  }

  const round = props.rounded ? 'rounded-l-full rounded-r-full' : ''

  return (
    <button
      {...props}
      className={`m-3 flex justify-center py-2 px-6 text-sm font-medium rounded-md ${className} ${round}`}
      onClick={props.onClick}
    >
      {title}
    </button>
  )
}

Button.defaultProps = {
  type: 'button',
  theme: 'primary',
  loading: true,
}

export default React.memo(Button)
