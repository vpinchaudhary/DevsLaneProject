import React, { useEffect, useState } from 'react'
import { fetchGroup } from '../api'
import { Datum } from '../groupInterfaces'
import { HiLockClosed, HiLockOpen } from 'react-icons/hi'

interface Props {
  query?: string
}

const Dashboard: React.FC<Props> = ({ query }) => {
  const [dataList, setDataList] = useState<any>([])
  useEffect(() => {
    fetchGroup({ status: 'all-groups', query }).then((response) => {
      setDataList(response.data.data)
    })
  }, [query])

  return (
    <div className=''>
      <div className='border rounded-md max-w-3xl mx-auto my-6'>
        {dataList.map((data: Datum, index: number) => (
          <div
            key={data.id}
            className={`${
              index % 2 === 0 ? 'bg-white' : 'bg-gray-200'
            } flex justify-between items-center`}
          >
            <div className='w-96'>
              <h2 className='capitalize text-heading-200 font-medium text-xl'>
                {data.name}
              </h2>
              <div className='flex items-center justify-between'>
                <h3 className='capitalize text-heading-100'>
                  {data.creator.first_name} {data.creator.middle_name}{' '}
                  {data.creator.last_name}
                </h3>
                <h3 className='capitalize text-purple-700'>
                  {data.creator.role}
                </h3>
              </div>
            </div>
            <h3 className='capitalize text-heading-200 text-7xl'>
              {!data.is_private ? (
                <HiLockOpen className='text-green-500' />
              ) : (
                <HiLockClosed className='text-red-500' />
              )}
            </h3>
          </div>
        ))}
      </div>
    </div>
  )
}

Dashboard.defaultProps = {}

export default React.memo(Dashboard)
