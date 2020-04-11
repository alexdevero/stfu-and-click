import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { LeaderboardTableRow } from './leaderboard-table-row'

import './../styles/leaderboard-table.css'

interface RankI {
  id: number;
  team: string;
  clicks: number;
}

interface LeaderboardTableI {
  teamName?: string;
  myClicks?: number;
}

export const LeaderboardTable = (props: LeaderboardTableI) => {
  const [rankings, setRankings] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchLeaderboardApi()
  }, [props.myClicks]) // Update Leaderboard table when click happens

  const fetchLeaderboardApi = () => {
    axios.get('http://localhost:4001/api/leaderboard/')
      .then(response => {
        setRankings(response.data.slice(0, 10).sort((x: any,y: any) => x.clicks > y.clicks ? -1 : 1))
        setLoading(false)
      })
      .catch(error => console.error('Could not get leaderboard: ', error))
  }

  const handleTableReset = () => {
    axios.put('http://localhost:4001/api/leaderboard/reset')
    .then(() => {
      fetchLeaderboardApi()
    })
    .catch(error => console.error('Could not get leaderboard: ', error))
  }

  if (loading) return <p>Leaderboard table is loading...</p>

  return (
    <>
      <table className="table">
          <thead>
            <tr>
              <th className="table-head" />

              <th className="table-head" style={{ textAlign: 'left' }}>TEAM</th>

              <th className="table-head">CLICKS</th>
            </tr>
          </thead>

          <tbody className="table-body">
            {rankings.length > 0 ? (
              rankings.map((rank: RankI, idx) => <LeaderboardTableRow teamName={props.teamName} key={rank.id} rank={rank} position={idx + 1} />)
            ) : (
              <tr className="table-row">
                <td className="table-item" style={{ textAlign: 'center' }} colSpan={3}>No teams to show. Create one and start playing!</td>
              </tr>
            )
          }
          </tbody>
      </table>

      {rankings.length > 0 && <button className="btn-link-reset" onClick={handleTableReset}>Reset leaderboard table.</button>}
    </>
  )
}
