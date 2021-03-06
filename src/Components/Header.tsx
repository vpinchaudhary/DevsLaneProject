import React, { useState } from 'react'
import { RiSearchLine } from 'react-icons/ri'
import { FiMail, FiBell } from 'react-icons/fi'
import { FaCircle } from 'react-icons/fa'
import MenuList from './Menu/MenuList'
import MenuItem from './Menu/MenuItem'
import { logOut } from '../api/auth'
import { Redirect } from 'react-router-dom'

interface Props {}

const Header: React.FC<Props> = () => {
  const [value, setValue] = useState('')
  return (
    <div className='relative w-full flex bg-secondary-200 py-2 px-4'>
      <div className='flex w-full items-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='149.68'
          height='25.797'
          viewBox='0 0 149.68 25.797'
        >
          <g
            id='Group_257'
            data-name='Group 257'
            transform='translate(-104.12 -55)'
          >
            <path
              className='hidden md:block'
              id='Path_701'
              data-name='Path 701'
              d='M19.776-9.6c0-5.28-3.232-9.6-10.912-9.6H2.112V0H8.864C16.544,0,19.776-4.32,19.776-9.6Zm-4,0c0,3.84-1.856,6.464-7.1,6.464H6.016V-16.064H8.672C13.92-16.064,15.776-13.44,15.776-9.6ZM33.024-6.848c0-2.624-2.24-4.48-5.088-4.48a5.637,5.637,0,0,0-5.728,5.792A5.7,5.7,0,0,0,28.192.416,7.251,7.251,0,0,0,32.8-.992V-3.36a5.964,5.964,0,0,1-3.52,1.28c-2.72,0-3.552-1.568-3.552-3.2h7.1A7.5,7.5,0,0,0,33.024-6.848ZM29.76-7.52a3.021,3.021,0,0,1-.032.448H25.856c.288-1.536,1.152-2.112,2.112-2.112A1.616,1.616,0,0,1,29.76-7.52Zm17.248-3.392H43.616l-2.848,7.1-2.816-7.1H34.5L39.36.064h2.784ZM57.44-3.52c0-1.472-1.088-3.008-4.224-3.616-.96-.192-1.472-.416-1.472-.992,0-.544.416-.864,1.376-.864a6.883,6.883,0,0,1,3.3.992l.544-2.24a8.277,8.277,0,0,0-3.9-1.088c-3.168,0-4.384,1.76-4.384,3.52,0,1.632.96,3.136,3.872,3.68,1.28.224,1.824.512,1.824,1.152,0,.7-.544,1.024-1.568,1.024a7.349,7.349,0,0,1-3.936-1.312L48.288-.9A8.7,8.7,0,0,0,52.832.416C55.9.416,57.44-1.152,57.44-3.52ZM73.216,0V-3.04H64.608V-19.2H60.7V0Zm1.632-5.472c0,3.52,2.272,5.888,5.184,5.888A4.748,4.748,0,0,0,83.968-1.44l.1,1.44h3.328V-10.912H84.064l-.1,1.44a4.748,4.748,0,0,0-3.936-1.856C77.12-11.328,74.848-8.928,74.848-5.472Zm3.584,0c0-2.112,1.312-3.232,2.752-3.232,1.376,0,2.752,1.024,2.752,3.232S82.56-2.208,81.184-2.208C79.744-2.208,78.432-3.328,78.432-5.472ZM102.88,0V-6.56c0-2.72-1.184-4.768-4.128-4.768a4.882,4.882,0,0,0-4.128,2.336l-.192-1.92H91.168V0h3.584V-5.824A2.753,2.753,0,0,1,97.376-8.48c1.28,0,1.92.736,1.92,2.5V0ZM116.8-6.848c0-2.624-2.24-4.48-5.088-4.48a5.637,5.637,0,0,0-5.728,5.792A5.7,5.7,0,0,0,111.968.416a7.251,7.251,0,0,0,4.608-1.408V-3.36a5.964,5.964,0,0,1-3.52,1.28c-2.72,0-3.552-1.568-3.552-3.2h7.1A7.5,7.5,0,0,0,116.8-6.848Zm-3.264-.672a3.021,3.021,0,0,1-.032.448h-3.872c.288-1.536,1.152-2.112,2.112-2.112A1.616,1.616,0,0,1,113.536-7.52Z'
              transform='translate(137 77)'
              fill='#FFF'
            />
            <g
              id='Layer_2'
              data-name='Layer 2'
              transform='translate(104.12 55)'
            >
              <g id='Layer_1' data-name='Layer 1' transform='translate(0 0)'>
                <path
                  id='Path_2'
                  data-name='Path 2'
                  d='M434.234,8.9l-3.449,3.448L421.4,2.963,424.019.344a1.173,1.173,0,0,1,1.659,0Z'
                  transform='translate(-413.139 -0.001)'
                  fill='#FFF'
                />
                <path
                  id='Path_3'
                  data-name='Path 3'
                  d='M437.753,485.449v.008c0,.016,0,.032,0,.048a1.168,1.168,0,0,1-.342.767l-2.627,2.627-9.1,9.1a1.292,1.292,0,0,1-.136.118,1.152,1.152,0,0,1-.1.064l-.051.029-.051.026-.078.033a.74.74,0,0,1-.081.027,1.181,1.181,0,0,1-.668,0,1.15,1.15,0,0,1-.211-.086,1.181,1.181,0,0,1-.284-.21l-2.619-2.62,9.935-9.934,3.449-3.45,2.625,2.627a1.167,1.167,0,0,1,.342.767C437.753,485.411,437.753,485.431,437.753,485.449Z'
                  transform='translate(-413.139 -472.551)'
                  fill='#FFF'
                />
                <path
                  id='Path_4'
                  data-name='Path 4'
                  d='M117.33,233.764l2.254,2.254,6.134-6.134-1.712-1.712a.767.767,0,0,0-1.084,0Z'
                  transform='translate(-115.03 -223.48)'
                  fill='#FFF'
                />
                <path
                  id='Path_5'
                  data-name='Path 5'
                  d='M0,545.253v.005c0,.011,0,.021,0,.031a.764.764,0,0,0,.223.5l1.716,1.716,5.951,5.951a.852.852,0,0,0,.089.076c.021.015.042.029.064.042l.033.02.034.016.052.022a.556.556,0,0,0,.053.018.764.764,0,0,0,.76-.193l1.712-1.712L4.2,545.255,1.941,543,.224,544.715a.764.764,0,0,0-.223.5C0,545.229,0,545.241,0,545.253Z'
                  transform='translate(0 -532.355)'
                  fill='#FFF'
                />
                <circle
                  id='Ellipse_1'
                  data-name='Ellipse 1'
                  cx='2.235'
                  cy='2.235'
                  r='2.235'
                  transform='translate(20.144 21.326)'
                  fill='#FFF'
                />
              </g>
            </g>
          </g>
        </svg>
        <span className='hidden md:flex relative w-full'>
          <RiSearchLine className='top-2 absolute block left-16 mx-2 text-2xl text-white' />
          <input
            onChange={(e) => {
              setValue(e.target.value)
            }}
            value={value}
            type='text'
            className='ml-16 w-1/4 py-2 pr-2 pl-10 text-heading-100 bg-secondary-100 outline-none rounded-md'
            placeholder='Search...'
          />
        </span>
      </div>
      <div className='relative -top-2'>
        <div className='flex items-center md:mt-2 space-x-4 absolute right-4'>
          <RiSearchLine className='md:hidden text-2xl text-white' />
          <div className='relative'>
            <MenuList
              title={
                <div className='h-6 w-6'>
                  <img
                    src='https://designreset.com/cork/ltr/demo4/assets/img/ca.png'
                    alt=''
                  />
                </div>
              }
              className=''
            >
              <MenuItem>
                <img
                  className='h-6 w-6'
                  src='https://designreset.com/cork/ltr/demo4/assets/img/fr.png'
                  alt=''
                />
                <h3>French</h3>
              </MenuItem>
              <MenuItem>
                <img
                  className='h-6 w-6'
                  src='https://designreset.com/cork/ltr/demo4/assets/img/jp.png'
                  alt=''
                />
                <h3>Japanese</h3>
              </MenuItem>
              <MenuItem>
                <img
                  className='h-6 w-6'
                  src='https://designreset.com/cork/ltr/demo4/assets/img/de.png'
                  alt=''
                />
                <h3>German</h3>
              </MenuItem>
            </MenuList>
          </div>
          <FiMail className='text-2xl text-white' />
          <div className='relative'>
            <FaCircle className='absolute text-xs right-0 text-green-500' />
            <FiBell className='text-2xl text-white' />
          </div>
          <div>
            <MenuList
              title={
                <div className='h-6 w-6'>
                  <img
                    className='rounded-md'
                    src='https://designreset.com/cork/ltr/demo4/assets/img/profile-16.jpeg'
                    alt=''
                  />
                </div>
              }
            >
              <MenuItem onClick={() => <Redirect to='/profile' />}>
                Profile
              </MenuItem>
              <MenuItem>Inbox</MenuItem>
              <MenuItem>Lock Screen</MenuItem>
              <MenuItem onClick={logOut}>Sign Out</MenuItem>
            </MenuList>
          </div>
        </div>
      </div>
    </div>
  )
}

Header.defaultProps = {}

export default React.memo(Header)
