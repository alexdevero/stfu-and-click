import * as React from 'react'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'

import { HomePage } from './pages/home'
import { GameScreenPage } from './pages/game-screen'

export const App = () => (
  <div style={{ textAlign: 'center' }}>
    <Router>
      <header className="header">
        <span className="logo">
          <NavLink to="/" className="main-title">
            STFUANDCLICK.COM
          </NavLink>
        </span>
      </header>

      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/:id" component={GameScreenPage} />
      </Switch>
    </Router>

    <footer>
      <p className="text--italic">If you don't like this page, it's <a href="https://media.giphy.com/media/LOKFnev3YXCNonRIwx/giphy.gif" className="applifting-link">Applifting's</a> fault.</p>
    </footer>
  </div>
)
