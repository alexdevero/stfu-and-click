// Import database
const knex = require('./../db')

exports.leaderboardGet = async (req, res) => {
  // Get all data from database
  knex
    .select('*')
    .from('users')
    .then(userData => {
      res.json(userData)
    })
}

exports.leaderboardCreate = async (req, res) => {
  // Create new team in database
  knex('users')
    .insert({'team': req.body.team, 'clicks': 0})
    .orderBy('clicks', 'desc')
    .then(userData => {
      // res.send('Welcome back commander.')
      res.json(userData)
    })
}

exports.leaderboardReset = async (req, res) => {
  knex
    .select('*')
    .from('users')
    .del()
    .then(() => res.send('Table cleared.'))
}
