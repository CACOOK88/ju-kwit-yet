const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs')

const db = require('../models')

module.exports = function(passport) {
  passport.use(
    new LocalStrategy({ usernameField: 'userName' }, (userName, password, done) => {
      console.log(`in local strategy`)
      db.Users.findOne({
        where: { userName: userName }
      })
        .then(user => {
          if (!user) {  
            console.log(`no users found`)
            return done(null, false, {message: 'Username or Password Invalid'})
          }

          bcrypt.compare(password, user.password, ( err, isMatch ) => {
            if (err) throw err
            if (isMatch) {

              console.log(`is match`)
              return done(null, user)
            } else {
              console.log(`is not matched`)
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
    db.Users.findOne(
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