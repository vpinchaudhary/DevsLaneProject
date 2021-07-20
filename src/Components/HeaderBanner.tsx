import React from 'react'
import { Menu } from '@headlessui/react'
import { HiChevronDown } from 'react-icons/hi'

interface Props {}

const HeaderBanner: React.FC<Props> = (props) => {
  return (
    <>
      <div className='w-full bg-white shadow-sm py-2 px-8 flex justify-between items-center'>
        <div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='feather feather-menu'
          >
            <line x1='3' y1='12' x2='21' y2='12'></line>
            <line x1='3' y1='6' x2='21' y2='6'></line>
            <line x1='3' y1='18' x2='21' y2='18'></line>
          </svg>
        </div>
        <Menu as='div' className='relative inline-block text-left'>
          <div>
            <Menu.Button className='flex text-sm justify-center w-full px-4 py-2 text-gray-600 bg-white rounded-md border'>
              Settings
              <HiChevronDown
                className='w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100'
                aria-hidden='true'
              />
            </Menu.Button>
          </div>
          <Menu.Items className='absolute right-0 w-36 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
            <div className='px-1 py-1 '>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`text-gray-600 group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    Settings
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`text-gray-600 group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    Mail
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`text-gray-600 group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    Print
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`text-gray-600 group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    Download
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`text-gray-600 group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    Share
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Menu>
      </div>
    </>
  )
}

HeaderBanner.defaultProps = {}

export default React.memo(HeaderBanner)
