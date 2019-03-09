const router = require('express').Router()
const usersController = require('../../controllers/usersController')

//INSERT ROUTES HERE TO HIT CONTROLLER TO QUERY DATABASE FOR RESPONSE

// MATCHES WITH /api/users/:id
router.route('/:id')
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove)

  // MATCHES WITH /api/users
router.route('/')
  .post(usersController.create)

module.exports = router