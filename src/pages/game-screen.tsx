import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

import { LeaderboardTable } from './../components/leaderboard-table'

import './../styles/game-screen.css'

interface GameScreenPageI {
  location: {
    pathname: string;
  }
}

export const GameScreenPage = (props: GameScreenPageI) => {
  const teamName = props.location.pathname.slice(1)
  const teamPoints = {
    team: teamName,
    clicks: 0,
    session: uuidv4()
  }
  const [myClicks, setMyClicks] = useState(0)
  const [teamClicks, setTeamClicks] = useState(0)
  const [teamData, setTeamData] = useState({
    order: 0,
    team: '',
    clicks: 0
  })

  useEffect(() => {
    fetchApi()
    //This is so that the team points don't start out at zero
    // postClick()
  }, [])

  //To move to context file when I figure out how to deal with the data
  const fetchApi = () => {
    axios
      // .get('https://klikuj.herokuapp.com/api/v1/leaderboard')
      .get('http://localhost:4001/api/leaderboard/')
      .then(response => {
        setTeamData(response.data)
      })
      .catch(error => console.error('Could not get click count.', error))
  }

  // To move to context file when I figure out how to deal with the data
  const postClick = () => {
    axios
      .post('http://localhost:4001/api/click', teamPoints)
      .then(res => {
        setTeamClicks(res.data.team_clicks)
      })
      .catch(error => console.error('Problem adding clicks: ', error))
  }

  const handleClick = () => {
    postClick()
    fetchApi()
    setMyClicks(myClicks + 1)
  }

  document.title = `${teamName} | STFU AND CLICK`

  return (
    <div>
      <div className="wrapper">
        <p className="clicks-intro-text">
          Clicking for team <strong>{teamName}</strong>
        </p>

        <p className="text--italic">
          Too lazy to click? Let your pals click for you:
          <input type="text" value={`stfuandclick.com/${teamName}`} className="url-input" readOnly />
        </p>

        <div className="leaderboard-wrapper">
          <div className="top-container" style={{ display: 'block' }}>
            <div className="btn-primary" onClick={handleClick}>CLICK!</div>

            <div className="clicks-container">
              <p className="clicks-player-name">Your clicks:</p>
              <p className="clicks-player-name">Team clicks:</p>

              <p className="clicks-count">{myClicks}</p>
              <p className="clicks-count">{teamClicks}</p>
            </div>
          </div>

          <LeaderboardTable teamName={teamName} myClicks={myClicks} />

          <p className="text--italic">Want to be top? STFU and click!</p>
        </div>
      </div>
    </div>
  )
}
