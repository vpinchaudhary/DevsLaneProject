import React from 'react'
import { HiChevronDown } from 'react-icons/hi'
import MenuList from './Menu/MenuList'
import MenuItem from './Menu/MenuItem'

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
        <div className='relative inline-block text-left'>
          <MenuList
            title='Settings'
            Icon={HiChevronDown}
            className='rounded-md border'
          >
            <MenuItem>Settings</MenuItem>
            <MenuItem>Mail</MenuItem>
            <MenuItem>Print</MenuItem>
            <MenuItem>Download</MenuItem>
            <MenuItem>Share</MenuItem>
          </MenuList>
        </div>
      </div>
    </>
  )
}

HeaderBanner.defaultProps = {}

export default React.memo(HeaderBanner)
