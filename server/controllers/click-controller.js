const knex = require('./../db')

exports.clickPost = async (req, res) => {
  // Update user data
  // related to current team
  knex('users')
    .where('team', req.body.team)
    .increment('clicks', 1)
    .then(() => {

  // Return latest user data
  // related to current team
  knex('users')
    .where('team', req.body.team)
    .select('clicks')
    .then(data => {
      res.json({
        'team_clicks': data[0].clicks,
        'your_clicks': req.body.yourClicks
      })
    })
  })
}
