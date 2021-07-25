import React from 'react'
import AvatarStack from './AvatarStack/AvatarStack'
import ProgressBar from './ProgressBar/ProgressBar'

interface Props {
  title: string
  status: string
  width: number
}

const Card: React.FC<Props> = (props) => {
  return (
    <div className='mt-10 max-w-md mx-auto border border-gray-200 p-6 shadow-lg rounded-md space-y-6'>
      <div className='flex justify-between items-center'>
        <h2>{props.title}</h2>
        <h2 className='py-2 px-4 bg-indigo-100 font-medium text-xs rounded-md text-indigo-600 uppercase'>
          {props.status}
        </h2>
      </div>
      <AvatarStack />
      <div>
        <h2 className='text-right text-primary'>{props.width}%</h2>
        <ProgressBar width={props.width} />
      </div>
    </div>
  )
}

Card.defaultProps = {}

export default React.memo(Card)
