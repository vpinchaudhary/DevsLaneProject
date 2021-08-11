import { Menu } from '@headlessui/react'
import React from 'react'

interface Props {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

const MenuItem: React.FC<Props> = ({ children, onClick, className }) => {
  return (
    <Menu.Item>
      {({ active }) => (
        <button
          className={`text-gray-600 group flex rounded-md items-center w-full px-2 py-2 text-sm ${className}`}
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </Menu.Item>
  )
}

MenuItem.defaultProps = {}

export default React.memo(MenuItem)
