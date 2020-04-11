import * as React from 'react'
import { render } from 'react-dom'
// import { Provider } from 'react-redux'
// import store from './store/store'

import { App } from './app'

import './styles/main-page.css'
import './styles/styles.css'

const rootElement = document.getElementById('root')
render(<App />, rootElement)
