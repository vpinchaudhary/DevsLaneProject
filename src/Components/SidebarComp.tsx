import { Menu } from '@headlessui/react'
import React from 'react'
import { HiChevronDown } from 'react-icons/hi'
import { Link } from 'react-router-dom'

interface Props {
  title: React.ReactNode
  icon?: React.ReactNode
  children?: React.ReactElement[] | undefined
}

const SidebarComp: React.FC<Props> = ({ children, title, icon }) => {
  return (
    <Menu>
      <Menu.Button className='p-3 flex text-sm justify-between items-center w-full text-gray-900 bg-white rounded-lg shadow-md hover:bg-heading-100'>
        <span className='text-xl'>{icon}</span>
        {title}
        {
          <HiChevronDown
            className={
              'w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100 ' +
              (children?.length ? '' : 'invisible')
            }
            aria-hidden='true'
          />
        }
      </Menu.Button>
      <Menu.Items
        as='ul'
        className='space-y-2 list-disc list-inside text-center'
      >
        {children?.map((child, index) => (
          <Menu.Item as='li' key={index}>
            {({ active }) => (
              <Link
                to={child.props.to}
                key={index}
                className={`${active && 'text-blue-500'}`}
              >
                {child}
              </Link>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  )
}

SidebarComp.defaultProps = {}

export default React.memo(SidebarComp)
