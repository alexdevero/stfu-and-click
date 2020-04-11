import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

import { Ribbon } from './ribbon'

import { LeaderboardTable } from './leaderboard-table'

import './../styles/leaderboard.css'

export const Leaderboard = () => {
  const [team, setTeam] = useState('')

  const createTeam = (team: string) => {
    axios.post('http://localhost:4001/api/leaderboard/create', {
      'team': team,
      'session': uuidv4()
    })
      .then(res => console.log(res.data))
      .catch(err => console.error('Problem submitting team.', err))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTeam(e.target.value)
  }

  const handleSubmit = () => {
    if (team !== '') {
      createTeam(team)

      console.info(`Adding team ${team}`)
    }
  }

  document.title = 'STFU AND CLICK'
  return (
    <div className="leaderboard-wrapper">
      <div className="top-container">
        <div className="form-wrapper">
          <label className="form-label" htmlFor="name">Enter your team name:</label>
          <input className="form-input" type="text" placeholder="Your mom" id="name" name="team" value={team} onChange={handleChange} required />
        </div>

        <Link to={'/' + team} className="start-link">
          <button onClick={handleSubmit} className="btn-start">CLICK</button>
        </Link>
      </div>

      <Ribbon />

      <LeaderboardTable />

      <p className="text--italic">Want to be top? STFU and click!</p>
    </div>
  )
}
