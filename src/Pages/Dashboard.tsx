import React from 'react'

interface Props {}

const Dashboard: React.FC<Props> = (props) => {
  return <h2>this is dashboard</h2>
}

Dashboard.defaultProps = {}

export default React.memo(Dashboard)
