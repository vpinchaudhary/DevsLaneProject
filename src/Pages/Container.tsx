import React from 'react'
import { Switch } from 'react-router-dom'
import Header from '../Components/Header'
import HeaderBanner from '../Components/HeaderBanner'
import Dashboard from './Dashboard'

interface Props {}

const Container: React.FC<Props> = () => {
  return (
    <Switch>
      <>
        <div id='header' className='sticky top-0 w-full'>
          <Header />
          <HeaderBanner />
        </div>
        <div
          className='w-full overflow-x-hidden overflow-y-scroll'
          style={{
            height: `calc(100vh - 110px)`,
          }}
        >
          <Dashboard />
        </div>
      </>
    </Switch>
  )
}

Container.defaultProps = {}

export default React.memo(Container)
