import React from 'react'
import { Link } from 'react-router-dom'

interface Props {}

const Sidebar: React.FC<Props> = (props) => {
  return (
    <div className='h-screen w-1/5 bg-blue-200 space-y-5 p-5'>
      <div>
        <Link to='/dashboard' className='text-blue-800 font-bold text-2xl'>
          Dashboard
        </Link>
      </div>
      <div>
        <Link to='/recordings' className='text-blue-800 font-bold text-2xl'>
          Recordings
        </Link>
      </div>
    </div>
  )
}

Sidebar.defaultProps = {}

export default React.memo(Sidebar)
