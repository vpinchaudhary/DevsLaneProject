import React from 'react'

export interface Props {
  width?: number
  theme?: 'indigo' | 'blue' | 'green' | 'orange' | 'red' | 'purple' | 'gray'
  gradient?: boolean
  size?: 'small' | 'medium' | 'large'
}

const ProgressBar: React.FC<Props> = (props) => {
  const width = props.width
  let color = ''
  let size = ''
  switch (props.size) {
    case 'small':
      size = 'h-2'
      break
    case 'medium':
      size = 'h-4'
      break
    case 'large':
      size = 'h-6'
  }
  switch (props.theme) {
    case 'indigo':
      color = 'indigo-500'
      break
    case 'orange':
      color = 'yellow-500'
      break
    case 'green':
      color = 'green-500'
      break
    case 'blue':
      color = 'blue-500'
      break
    case 'red':
      color = 'red-500'
      break
    case 'gray':
      color = 'gray-500'
      break
  }

  return (
    <>
      <div className='w-full rounded-l-full bg-gray-200 rounded-r-full'>
        <div
          className={
            `relative left-0 ${size} rounded-r-full rounded-l-full` +
            (props.gradient
              ? ` bg-gradient-to-l from-${color}`
              : ` bg-${color}`)
          }
          style={{ width: `${width}%` }}
        >
          <span className='sr-only'>{width} Complete</span>
        </div>
      </div>
    </>
  )
}

ProgressBar.defaultProps = {
  width: 0,
  theme: 'blue',
  gradient: false,
  size: 'small',
}

export default React.memo(ProgressBar)
