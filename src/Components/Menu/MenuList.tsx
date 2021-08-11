import React from 'react'
import { Menu } from '@headlessui/react'
import { IconType } from 'react-icons'

interface Props {
  children: React.ReactElement[]
  title: string | React.ReactNode
  Icon?: IconType
  className?: string
}

const MenuList: React.FC<Props> = ({ children, title, Icon, className }) => {
  return (
    <Menu>
      <div>
        <Menu.Button
          className={`flex text-sm justify-center w-full px-4 py-2 text-gray-600 bg-transparent ${className}`}
        >
          {title}
          {Icon && (
            <Icon
              className='w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100'
              aria-hidden='true'
            />
          )}
        </Menu.Button>
      </div>
      <Menu.Items className='absolute right-0 z-10 w-36 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
        <div className='px-1 py-1 '>{children.map((child) => child)}</div>
      </Menu.Items>
    </Menu>
  )
}

MenuList.defaultProps = {}

export default React.memo(MenuList)
