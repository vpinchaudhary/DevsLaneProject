import React, { useState } from 'react'
import { Switch } from 'react-router-dom'
import Header from '../Components/Header'
import HeaderBanner from '../Components/HeaderBanner'
import Dashboard from './Dashboard'

interface Props {}

const Container: React.FC<Props> = (props) => {
  const [query, setQuery] = useState('')
  return (
    <Switch>
      <>
        <div id='header' className='sticky top-0 w-full'>
          <Header setQuery={setQuery} />
          <HeaderBanner />
        </div>
        <Dashboard query={query} />
      </>
    </Switch>
  )
}

Container.defaultProps = {}

export default React.memo(Container)
