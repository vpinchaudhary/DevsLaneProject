import React from 'react'

interface Props {}

const AuthHero: React.FC<Props> = (props) => {
  return (
    <div className='h-screen bg-black text-white w-1/2'>
      This is the hero section
    </div>
  )
}

AuthHero.defaultProps = {}

export default React.memo(AuthHero)
