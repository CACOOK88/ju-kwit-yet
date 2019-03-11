const bcrypt = require('bcryptjs')
const passport = require('passport')
const db = require('../models')

module.exports = {
  findById: function(req, res) {

  },
  login: function(req, res, next) {
    passport.authenticate('local', {
      successRedirect: '/users/profile',
      failureRedirect: '/loginsuccess'
    })(req, res, next)
  },
  logout: function(req, res) {
    req.logout()
    res.redirect('/')
  },
  create: function(req, res) {
    //create user and save encrypted password
    const { firstName, lastName, email, userName, password } = req.body
    let errors = []

    if ( !firstName || !lastName || !email || !userName || !password ) {
      errors.push({msg: 'Please enter all fields'})
    }

    if ( password.length < 6 ) {
      errors.push({msg: 'Password must be at least 6 characters'})
    }

    if ( errors.length > 0 ) {
      res.json({errors})
    } else {
      console.log(`inside /api/users/register create function`)
      console.log(req.body)
      res.json(req.body)
      // bcrypt.genSalt(10, (err, salt) => {
      //   bcrypt.hash(password, salt, (err, hash) => {
      //     if (err) throw err
      //     password = hash

      //     db.Users.create({
      //       firstName: firstName,
      //       lastName: lastName,
      //       email: email,
      //       userName: userName,
      //       password: password
      //     })
      //       .then(function(newUser) {
      //         console.log(newUser)
      //         res.json(newUser)
      //       })
      //   })
      // })

    }
  }
}