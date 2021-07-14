import React from 'react'
import { Link, useParams } from 'react-router-dom'

interface Props {}

const LecturePage: React.FC<Props> = (props) => {
  const { batchNo, lectureNo } = useParams<any>()
  return (
    <div>
      <h2>
        This is lecture {lectureNo} for Batch {batchNo}
      </h2>
      <Link to='/recordings' className='text-blue-500'>
        Go back to recordings
      </Link>
    </div>
  )
}

LecturePage.defaultProps = {}

export default React.memo(LecturePage)
