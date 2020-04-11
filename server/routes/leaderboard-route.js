const express = require('express')

const leaderboardRoutes = require('./../controllers/leaderboard-controller.js')

const router = express.Router()

router.get('/', leaderboardRoutes.leaderboardGet)

router.post('/create', leaderboardRoutes.leaderboardCreate)

router.put('/reset', leaderboardRoutes.leaderboardReset)

module.exports = router
