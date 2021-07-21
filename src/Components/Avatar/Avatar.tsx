import React from 'react'
import { FiCircle } from 'react-icons/fi'

export interface Props {
  image?: string
  name: string
  size?: 'large' | 'medium' | 'small'
  rounded?: boolean
  indicator?: 'online' | 'offline' | 'none'
}

const Avatar: React.FC<Props> = (props) => {
  const round = props.rounded ? 'rounded-full' : 'rounded-md'
  const size =
    props.size === 'large'
      ? 'h-20 w-20'
      : props.size === 'medium'
      ? 'h-16 w-16'
      : 'h-10 w-10'
  const indicator =
    props.indicator === 'online'
      ? 'bg-green-500'
      : props.indicator === 'offline'
      ? 'bg-gray-500'
      : 'hidden'

  const getInitials = () => {
    const parts = props.name.split(' ')
    let initials = ''
    for (var i = 0; i < parts.length; i++) {
      if (parts[i].length > 0 && parts[i] !== '') {
        initials += parts[i][0]
      }
    }
    return initials
  }

  return (
    <div className='m-2 relative inline-block'>
      {!props.image ? (
        <div
          className={`${round} ${size} text-xl flex justify-center items-center text-white bg-gray-400 uppercase`}
        >
          <span>{getInitials()}</span>
        </div>
      ) : (
        <img
          className={`${round} ${size}`}
          src={props.image}
          alt={props.name}
        />
      )}
      <FiCircle
        className={`text-xs absolute bottom-0 right-2 rounded-full text-transparent ${indicator}`}
      />
    </div>
  )
}

Avatar.defaultProps = {
  rounded: false,
  size: 'small',
  indicator: 'none',
}

export default React.memo(Avatar)
