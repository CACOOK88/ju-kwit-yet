const router = require('express').Router()
const usersController = require('../../controllers/usersController')

//INSERT ROUTES HERE TO HIT CONTROLLER TO QUERY DATABASE FOR RESPONSE

// MATCHEAS WITH /api/users
router.route('/')
  .post(usersController.findByOne)

// MATCHES WITH /api/users/loginsuccess
router.route('/loginsuccess')
  .get(usersController.logInSuccess)

  // MATCHES WITH /api/users/register
router.route('/register')
  .post(usersController.create)

// MATCHES WITH /api/users/login
router.route('/login')
  .post(usersController.tempLogin)

// MATCHES WITH /api/users/logout
router.route('/logout')
  .get(usersController.logout)


  module.exports = router