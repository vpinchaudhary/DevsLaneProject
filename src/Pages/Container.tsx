import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Sidebar from '../Components/Sidebar'
import Dashboard from './Dashboard'
import LecturePage from './LecturePage'
import Recordings from './Recordings'

interface Props {}

const Container: React.FC<Props> = (props) => {
  return (
    <Switch>
      <>
        <div className='flex'>
          <Sidebar />
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
          <Route path='/recordings'>
            <Recordings />
          </Route>
          <Route path='/batch/:batchNo/lecture/:lectureNo'>
            <LecturePage />
          </Route>
        </div>
      </>
    </Switch>
  )
}

Container.defaultProps = {}

export default React.memo(Container)
