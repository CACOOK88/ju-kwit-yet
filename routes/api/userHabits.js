const router = require('express').Router()
const userHabitsController = require('../../controllers/userHabitsController')

// MATCHES WITH /api/userhabits/
router.route('/')
  .get(userHabitsController.findAll)
  .post(userHabitsController.create)

// MATCHES WITH /api/userhabits/:id
router.route('/:id')
  .get(userHabitsController.findById)
  .delete(userHabitsController.remove)

module.exports = router