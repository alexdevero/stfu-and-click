import React from 'react'

import { Leaderboard } from './../components/leaderboard'

export const HomePage = () => {
  return (
    <div className="wrapper">
      <div className="quote">
        <p className="text--italic">"It's really simple, you just need to click as fast as you can."</p>

        <p className="text--italic" style={{ textAlign: 'right' }}>- anonymous</p>
      </div>

      <Leaderboard />
    </div>
  )
}
