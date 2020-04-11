import React from 'react'

import './../styles/leaderboard-table.css'

interface LeaderboardTableRowI {
  position: number;
  rank: {
    id: number;
    team: string;
    clicks: number;
  }
  teamName?: string;
}

export const LeaderboardTableRow = (props: LeaderboardTableRowI) => (
  <tr className={`table-row${props.teamName && (props.teamName === props.rank.team) ? ' table-row--active' : ''}`}>
    <td className="table-item">{props.position}</td>

    <td className="table-item">{props.rank.team}</td>

    <td className="table-item">{props.rank.clicks}</td>
  </tr>
)
