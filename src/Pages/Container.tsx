import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Sidebar from '../Components/Sidebar'
import LecturePage from './LecturePage'
import Recordings from './Recordings'

interface Props {}

const Container: React.FC<Props> = (props) => {
  return (
    <Switch>
      <Sidebar />
      <Route path='/recordings'>
        <Recordings />
      </Route>
      <Route path='/batch/:batchNo/lecture/:lectureNo'>
        <LecturePage />
      </Route>
    </Switch>
  )
}

Container.defaultProps = {}

export default React.memo(Container)
