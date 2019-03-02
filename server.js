const express = require('express')

// EXPRESS APP AND PORT
const app = express()
const PORT = process.env.PORT || 8080

// REQUIRE MODELS
const db = require('./models')

// DATA PARSING
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

if ( process.env.NODE_ENV === 'production' ) {
  app.use(express.static('client/build'))
}

db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT )
  })
})
