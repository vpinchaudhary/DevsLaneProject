import React from 'react'
import { Switch } from 'react-router-dom'
import Header from '../Components/Header'
import HeaderBanner from '../Components/HeaderBanner'
import Sidebar from '../Components/Sidebar'

interface Props {}

const Container: React.FC<Props> = (props) => {
  return (
    <Switch>
      <>
        <div id='header' className='sticky top-0 w-full'>
          <Header />
          <HeaderBanner />
        </div>
        <div className='flex'>
          <Sidebar />
        </div>
      </>
    </Switch>
  )
}

Container.defaultProps = {}

export default React.memo(Container)
