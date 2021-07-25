import React, { useEffect, useState } from 'react'
import Avatar from '../Avatar/Avatar'

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
        <span className='relative'>
          <span className='inline-flex'>
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
        </span>
      )}
    </div>
  )
}

AvatarStack.defaultProps = {
  result: 10,
}

export default React.memo(AvatarStack)
