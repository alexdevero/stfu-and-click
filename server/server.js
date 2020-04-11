const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression')
const helmet = require('helmet')
const cors = require('cors')

// Import routes
const clickRouter = require('./routes/click-route')
const leaderboardRouter = require('./routes/leaderboard-route')

// Setup default port
const PORT = process.env.PORT || 4001

// Setup express app
const app = express()
app.use(cors())
app.use(helmet())
app.use(compression())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api/click', clickRouter)

app.use('/api/leaderboard', leaderboardRouter)

// Start express app
app.listen(PORT, function() {
  console.log(`Server is running on: ${PORT}`)
})
