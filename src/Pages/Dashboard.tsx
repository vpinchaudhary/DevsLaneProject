import React, { useEffect } from 'react'
import { HiLockClosed, HiLockOpen } from 'react-icons/hi'
import { RiSearchLine } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { setGroups } from '../actions/groups'
import { fetchGroup } from '../api/group'
import Input from '../Components/Input/Input'
import { Group } from '../modal/Group'
import { useAppSelector } from '../redux'

interface Props {}

const Dashboard: React.FC<Props> = () => {
  const query = useAppSelector((state) => state.groups.query)
  const dataList = useAppSelector((state) => {
    const groupIds = state.groups.queryMap[state.groups.query] || []
    const groups = groupIds.map((id) => state.groups.byId[id])
    return groups
  })
  const user = useAppSelector((state) => state.user.byId[state.auth.id!])
  const dispatch = useDispatch()

  useEffect(() => {
    fetchGroup({ status: 'all-groups', query }).then((response) => {
      dispatch(setGroups(query, response))
    })
  }, [query, dispatch])

  return (
    <div className=''>
      <div>
        <span className='hidden md:flex relative w-full'>
          <RiSearchLine className='top-2 absolute block left-16 mx-2 text-2xl text-white' />
          <Input
            onChange={(e) => {
              dispatch({ type: 'SET_GROUP_QUERY', payload: e.target.value })
            }}
            value={query}
            type='text'
            className='ml-16 w-1/4 py-2 pr-2 pl-10 text-heading-100 bg-secondary-100 outline-none rounded-md'
            placeholder='Search...'
          />
        </span>
      </div>
      <div className='border rounded-md max-w-3xl mx-auto my-6'>
        {user?.first_name} {user?.last_name}
        {dataList.map((data: Group, index: number) => (
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
                  {data.creator?.first_name} {data.creator?.middle_name}{' '}
                  {data.creator?.last_name}
                </h3>
                <h3 className='capitalize text-purple-700'>
                  {data.creator?.role}
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
