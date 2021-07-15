import React from 'react'
import { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'submit' | 'reset' | 'button'
  theme?: string
  title?: string
  loading?: boolean
}

const Button: React.FC<Props> = ({ type, theme, title, loading, ...props }) => {
  let buttonTheme = ''
  let themeColor = ''
  if (theme === 'default-primary') {
    buttonTheme = 'text-white bg-primary hover:bg-indigo-700 outline-none'
    themeColor = 'text-primary'
  }

  return (
    <button
      type={type}
      className={
        'flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md ' +
        buttonTheme
      }
      onClick={props.onClick}
    >
      <span className={loading ? themeColor : ''}>{title}</span>
    </button>
  )
}

Button.defaultProps = {
  type: 'button',
  theme: 'default-primary',
}

export default React.memo(Button)
