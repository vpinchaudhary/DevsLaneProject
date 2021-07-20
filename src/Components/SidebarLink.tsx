import React from 'react'

interface Props {
  to: string
  children: React.ReactNode
}

const SidebarLink: React.FC<Props> = (props) => {
  return <>{props.children}</>
}

SidebarLink.defaultProps = {}

export default React.memo(SidebarLink)
