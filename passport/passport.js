const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs')

const Users = require('../models/users')

module.exports = function(passport) {
  passport.use(
    new LocalStrategy({ username: 'userName' }, (userName, password, done) => {
      Users.Users.findOne({
        where: { userName: userName }
      })
        .then(user => {
          if (!user) {
            return done(null, false, {message: 'Username or Password Invalid'})
          }

          bcrypt.compare(password, user.password, ( err, isMatch ) => {
            if (err) throw err
            if (isMatch) {
              return done(null, user)
            } else {
              return done(null, false, { message: 'Username or Password Invalid'})
            }
          })
        })
    })
  )

  passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  passport.deserializeUser((id, done) => {
    Users.Users.findOne(
      {
        where: {
          id: id
        }
      }, 
      (err, user) => {
        done(err, user)
      })
  })
}