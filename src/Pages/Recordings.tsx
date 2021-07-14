import React from 'react'
import { Link } from 'react-router-dom'

interface Props {}

const Recordings: React.FC<Props> = (props) => {
  return (
    <div>
      this is recodings page
      <ul>
        {[...Array(10)].map((_, index) => (
          <li>
            <Link
              className='text-blue-500'
              to={'/batch/1/lecture/' + (index + 1)}
            >
              Lecture {index + 1}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

Recordings.defaultProps = {}

export default React.memo(Recordings)
