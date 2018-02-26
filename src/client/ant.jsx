import React from 'react'
import { Card } from 'antd'

export default ({stats}) => (
  <div>
    <Card title={stats.name} style={{width: 400}}>
      <p>{`Length: ${stats.length}`}</p>
      <p>{`Color: ${stats.color}`}</p>
      <p>{`Weight: ${stats.weight}`}</p>
      <p>{`Odds of winning: ${stats.odds || 'unknown'}` }</p>
    </Card>
  </div>
)
