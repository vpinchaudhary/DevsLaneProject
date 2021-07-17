import React from 'react'

interface Props {}

const AuthFooter: React.FC<Props> = (props) => {
  return (
    <footer className='text-gray-700 md:pt-0 pt-20'>
      © 2020 All Rights Reserved.{' '}
      <a href='/#' className='text-primary font-medium'>
        CORK
      </a>{' '}
      is a product of Designreset.{' '}
      <a href='/#' className='text-primary font-medium'>
        Cookie Preferences
      </a>
      ,{' '}
      <a href='/#' className='text-primary font-medium'>
        Privacy
      </a>
      , and{' '}
      <a href='/#' className='text-primary font-medium'>
        Terms
      </a>
      .
    </footer>
  )
}

AuthFooter.defaultProps = {}

export default React.memo(AuthFooter)
