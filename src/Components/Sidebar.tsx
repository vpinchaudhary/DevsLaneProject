import React, { useEffect, useState } from 'react'
import SidebarComp from './SidebarComp'
import SidebarLink from './SidebarLink'
import {
  FiHome,
  FiCpu,
  FiBox,
  FiTarget,
  FiAirplay,
  FiLayout,
  FiZap,
} from 'react-icons/fi'

interface Props {}

const Sidebar: React.FC<Props> = (props) => {
  const [height, setHeight] = useState('0')
  useEffect(() => {
    setHeight(
      `calc(100vh - ${document.getElementById('header')!.offsetHeight}px)`
    )
  }, [])

  return (
    <div
      className='lg:w-1/6 md:w-1/4 w-2/3 bg-gray-100 space-y-2 p-5 overflow-y-scroll'
      style={{
        height: height,
      }}
    >
      <SidebarComp title='Dashboard' icon={<FiHome />}>
        <SidebarLink to='/sales'>Sales</SidebarLink>
        <SidebarLink to='/analytics'>Analytics</SidebarLink>
      </SidebarComp>
      <SidebarComp title='Apps' icon={<FiCpu />}>
        <SidebarLink to='/chat'>Chat</SidebarLink>
        <SidebarLink to='/mailbox'>Mailbox</SidebarLink>
        <SidebarLink to='/todo'>To Do List</SidebarLink>
        <SidebarLink to='/notes'>Notes</SidebarLink>
        <SidebarLink to='/scrumboard'>Scrumboard</SidebarLink>
        <SidebarLink to='/contact'>Contact</SidebarLink>
        <SidebarLink to='/invoice'>Invoice</SidebarLink>
        <SidebarLink to='/calendar'>Calendar</SidebarLink>
      </SidebarComp>
      <SidebarComp title='Elements' icon={<FiBox />} />
      <SidebarComp title='Components' icon={<FiZap />} />
      <SidebarComp title='Font Icons' icon={<FiTarget />} />
      <SidebarComp title='Widget' icon={<FiAirplay />} />
      <SidebarComp title='Tables' icon={<FiLayout />} />
    </div>
  )
}

Sidebar.defaultProps = {}

export default React.memo(Sidebar)
