const path = require('path')

const dbPath = path.resolve(__dirname, 'db/database.sqlite')

const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: dbPath,
  },
  useNullAsDefault: true
})

// Create a table
knex.schema
  .hasTable('users')
    .then(function(exists) {
      if (!exists) {
        return knex.schema.createTableIfNotExists('users', function(table) {
          table.increments('id').primary()
          table.integer('order')
          table.string('team')
          table.integer('clicks')
        }).then(() => {
          console.log('insert done')
        })
      }
    })
    .then(() => console.log('done'))
    .catch(function(e) {
      console.error(e)
    })

knex.select('*').from('users')
  .then(data => console.log('data:', data))
  .catch(err => console.log(err))

module.exports = knex
