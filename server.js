const express = require('express')
const passport = require('passport')
const session = require('express-session')
const routes = require('./routes')

// PASSPORT CONFIG
require('./passport/passport')(passport)

// EXPRESS APP AND PORT
const app = express()
const PORT = process.env.PORT || 3001

// REQUIRE MODELS
const db = require('./models')

// DATA PARSING
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// EXPRESS SESSION
app.use(
  session({
    secret: 'superSecret',
    resave: true,
    saveUninitialized: true
  })
)

//PASSPORT MIDDLEWARE
app.use(passport.initialize())
app.use(passport.session())



if ( process.env.NODE_ENV === 'production' ) {
  app.use(express.static('client/build'))
}

app.use(routes)

db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT )
  })
})
