import React, { useEffect, useState } from 'react'
import Avatar from '../Avatar/Avatar'
import ProgressBar from '../ProgressBar/ProgressBar'

export interface Props {
  result?: number
}

const AvatarStack: React.FC<Props> = ({ result }) => {
  const [userImage, setUserImage] = useState<any>([])
  const [show, setShow] = useState<boolean>(false)

  useEffect(() => {
    fetch(`https://randomuser.me/api/?inc=picture&results=${result}`).then(
      (response) => {
        response.json().then((res: any) => setUserImage(res.results))
      }
    )
  }, [result])

  return (
    <div className='mt-10 max-w-md mx-auto border border-gray-200 p-6 shadow-lg rounded-md space-y-6'>
      <div className='flex justify-between items-center'>
        <h2>Placed Order</h2>
        <h2 className='py-2 px-4 bg-indigo-100 font-medium text-xs rounded-md text-indigo-600 uppercase'>
          in progress
        </h2>
      </div>
      <div className='relative'>
        {userImage.length <= 4 || show ? (
          userImage.map((image: any, index: number) => (
            <Avatar
              key={index}
              name={`${index}`}
              image={image.picture.medium}
              size='large'
              rounded
            />
          ))
        ) : (
          <>
            <span className='flex'>
              {Array(userImage.length > 4 ? 4 : userImage.length)
                .fill(null)
                .map((_, index) => (
                  <div
                    key={index}
                    className={`relative transform hover:-translate-y-2 duration-300`}
                    style={{
                      left: `-${index * 40}px`,
                    }}
                  >
                    <Avatar
                      name={`${index}`}
                      image={userImage[index].picture.medium}
                      size='large'
                      rounded
                    />
                  </div>
                ))}
            </span>
            {(userImage.length >= 4 || show) && (
              <span
                className='absolute px-2 text-primary py-1 bg-white bottom-0 right-24 rounded-l-full shadow-md rounded-r-full cursor-pointer transform hover:-translate-y-2 duration-300'
                onClick={() => setShow(true)}
              >
                {`+${userImage.length - 4} more`}
              </span>
            )}
          </>
        )}
      </div>
      <div>
        <h2 className='text-right text-primary'>60%</h2>
        <ProgressBar width={60} />
      </div>
    </div>
  )
}

AvatarStack.defaultProps = {
  result: 10,
}

export default React.memo(AvatarStack)
