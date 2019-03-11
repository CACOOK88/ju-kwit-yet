const router = require('express').Router()
const usersController = require('../../controllers/usersController')

//INSERT ROUTES HERE TO HIT CONTROLLER TO QUERY DATABASE FOR RESPONSE

// MATCHES WITH /api/users/:id
router.route('/:id')
  .get(usersController.findById)

  // MATCHES WITH /api/users/register
router.route('/register')
  .post(usersController.create)

// MATCHES WITH /api/users/login
router.route('/login')
  .post(usersController.login)

// MATCHES WITH /api/users/logout
router.route('/logout')
  .get(usersController.logout)


  module.exports = router